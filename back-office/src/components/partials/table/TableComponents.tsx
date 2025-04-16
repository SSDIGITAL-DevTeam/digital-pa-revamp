import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TableProps {
  headings: string[];
  data: any;
  setSort: (sort: { key: string; direction: boolean }) => void;
  sort: { key: string; direction: boolean };
}

const TableComponents: React.FC<TableProps> = ({ headings, data, setSort, sort }) => {
  // const [sort, setSort] = useState({
  //   key : "",
  //   direction : true
  // });
  const checkStatus = (status: string) => {
    return (
      <span
        className={`py-1 px-3 rounded-lg text-xs flex items-center gap-2 w-fit
        ${status === "Active" || status === "Published"
            ? "bg-green-100 text-green-700"
            : status === "Archived"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }
      `}
      >
        <span
          className={`h-2 w-2 rounded-full ${status === "Active" || status === "Published"
              ? "bg-green-700"
              : status === "Archived"
                ? "bg-red-700"
                : "bg-yellow-700"
            }`}
        />
        {status}
      </span>

    )
  }

  const handleSort = (key: string, direction: boolean) => {
    // console.log(key, direction)
    switch (key) {
      case "Status":
        setSort({ key: "status", direction });
        break;
      case "Blog Name":
        setSort({ key: "title", direction });
        break;
      case "Category":
        setSort({ key: "categoryId", direction });
        break;
      case "Category Name":
        setSort({ key: "name", direction });
        break;
      case "Created At":
        setSort({ key: "createdAt", direction });
        break;
      default:
        break;
    }
  }

  const headingKeyMap: Record<string, string> = {
    "Status": "status",
    "Blog Name": "title",
    "Category": "categoryId",
    "Category Name": "name",
    "Created At": "createdAt",
  };
  

  // console.log({ data })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headings.map((heading) => (
            <TableHead
              key={heading}
              onClick={() => handleSort(heading, !sort.direction)}
              className="cursor-pointer select-none text-red-900 hover:text-red-700"
            >
              {heading}{" "}
              {sort?.key === headingKeyMap[heading] && (
                <span className="ml-1 inline-block">
                  {sort?.direction === true ? (
                    <ChevronUp size={10} />
                  ) : (
                    <ChevronDown size={10} />
                  )}
                </span>
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: any, rowIndex: number) => (
          <TableRow key={rowIndex}>
            {headings.map((key) => (
              <TableCell key={`${rowIndex}-${key}`} className="p-2">
                {key == "Status" ? checkStatus(row[key]) : row[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponents;
