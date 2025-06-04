import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "Unified CRM + WhatsApp + Email",
    paymentStatus: "✅ Yes",
    totalAmount: "⚠️️ Limited or Add-on",
    paymentMethod: "❌ Not possible",
  },
  {
    invoice: "Auto Follow-Ups & Bookings",
    paymentStatus: "✅ Built-in",
    totalAmount: "⚠️ Custom setup needed",
    paymentMethod: "❌ 100% manual",
  },
  {
    invoice: "AI Chatbot",
    paymentStatus: "✅ AI Chatbot  Replies instantly",
    totalAmount: "⚠️ Basic or extra cost",
    paymentMethod: "❌ Not available",
  },
  {
    invoice: "Dashboard for Visibility",
    paymentStatus: "✅ Real-time tracking",
    totalAmount: "⚠️ Complicated",
    paymentMethod: "❌ No insight",
  },
  {
    invoice: "SME-Focused Design",
    paymentStatus: "✅ Plug-and-play",
    totalAmount: "⚠️ Too complex",
    paymentMethod: "❌ Manual only",
  },
  {
    invoice: "Cost-Saving, High ROI",
    paymentStatus: "✅ One smart price",
    totalAmount: "❌ High license + setup",
    paymentMethod: "❌ High manpower cost",
  }
]

export default function SectionTableSmartBusiness() {
  return (
    <Table className="rounded-t-md overflow-hidden">
      <TableHeader>
        <TableRow className="rounded-t-xl">
          <TableHead className="text-white bg-primary">Feature / Value</TableHead>
          <TableHead className="text-primary bg-red-100/60 font-semibold border-l-[1px] border-gray-300">✅ DPA Leads</TableHead>
          <TableHead className="text-primary bg-red-100/60 font-semibold border-l-[1px] border-gray-300">❌ Traditional CRM</TableHead>
          <TableHead className="text-primary bg-red-100/60 font-semibold border-l-[1px] border-gray-300">❌ Manual Work</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell className="border-l-[1px] border-gray-300">{invoice.paymentStatus}</TableCell>
            <TableCell className="border-l-[1px] border-gray-300">{invoice.totalAmount}</TableCell>
            <TableCell className="border-l-[1px] border-gray-300">{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
