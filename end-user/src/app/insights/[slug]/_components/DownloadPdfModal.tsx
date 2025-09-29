"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type Props = {
  pdf: string;
  slug: string;
};

export default function DownloadPdfModal({ pdf, slug }: Props) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ kontrol modal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      throw new Error("reCAPTCHA is not available");
    }

    setLoading(true);
    try {
      const token = await executeRecaptcha("downloadPdfSubmit");
      const payload = {
        name: form.name,
        email: form.email,
        phone: "-",
        business: "-",
        message: "-",
        from: "insights/" + slug,
        companyName: form.company,
        token,
        isAgree: true,
      };

      console.log("Submitting payload:", payload);
      const response = await axiosInstance.post("/lead", payload);
      console.log("masuk response", response.status);

      if (response.status === 201) {
        const pdfUrl = `${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${pdf}`;
        console.log("Downloading from:", pdfUrl);

        try {
          const fileResponse = await axiosInstance.get(pdfUrl, {
            responseType: "blob",
          });

          const blobUrl = window.URL.createObjectURL(
            new Blob([fileResponse.data], { type: "application/pdf" })
          );

          const link = document.createElement("a");
          link.href = blobUrl;
          link.setAttribute("download", pdf);
          document.body.appendChild(link);
          link.click();
          link.remove();

          window.URL.revokeObjectURL(blobUrl);
          console.log("download berhasil");

          setOpen(false); // ✅ tutup modal setelah download
        } catch (downloadError) {
          console.error("Gagal download blob, fallback buka tab:", downloadError);
          window.open(pdfUrl, "_blank");
          setOpen(false); // ✅ tetap tutup modal walau fallback
        }
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Backend response:", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Download PDF</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Please fill in your details before downloading
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter your company name"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="mt-4" disabled={loading}>
            {loading ? "Processing..." : "Submit & Download"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
