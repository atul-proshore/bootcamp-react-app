import { MockTableData } from '@/constants';
import { Input } from '../shadcnUI/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../shadcnUI/table';

const EditableTable = () => {
  let lowConfidence = 'bg-red-100 border-2 border-red-500';
  let medConfidence = 'bg-orange-100 border-2 border-orange-400';
  let highConfidence = 'bg-green-100 border-2 border-green-500';

  return (
    <div className="w-full overflow-auto">
      <div>EditableTable</div>

      <Table className="min-w-7xl table-fixed border">
        <TableHeader className="border">
          {/* 1st Row */}
          <TableRow className="divide-x divide-y text-center">
            <TableHead colSpan={4} className="text-center">
              VNB-242
            </TableHead>
            <TableHead colSpan={12} className="text-center">
              WEEKLY TRACKING
            </TableHead>
          </TableRow>

          {/* 2nd Row */}
          <TableRow className="divide-x divide-y text-center">
            <TableHead colSpan={3} className="text-center">
              Information
            </TableHead>
            <TableHead colSpan={1} className="text-center">
              Start
            </TableHead>

            <TableHead colSpan={3} className="text-center">
              Gift Feed
            </TableHead>
            <TableHead colSpan={3} className="text-center">
              Rest Feed
            </TableHead>

            <TableHead colSpan={2} className="text-center">
              Death and Selection
            </TableHead>

            <TableHead colSpan={4} className="text-center">
              The end of Week
            </TableHead>
          </TableRow>

          {/* 3rd Row */}

          <TableRow className="">
            <TableHead className="border text-center">No.</TableHead>
            <TableHead className="border text-center">Pen</TableHead>
            <TableHead className="border text-center">Trt.</TableHead>
            <TableHead className="border text-center">No. Bird</TableHead>

            <TableHead className="border text-center">1</TableHead>
            <TableHead className="border text-center">2</TableHead>
            <TableHead className="border text-center">3</TableHead>

            <TableHead className="border text-center">1</TableHead>
            <TableHead className="border text-center">2</TableHead>
            <TableHead className="border text-center">3</TableHead>

            <TableHead className="border text-center">Death</TableHead>

            <TableHead className="border text-center">BW</TableHead>

            <TableHead className="border text-center">Selection</TableHead>

            <TableHead className="border text-center">BW</TableHead>

            <TableHead className="border text-center">No. Bird</TableHead>
            <TableHead className="border text-center text-wrap">
              Final Weight
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {MockTableData.map((data, idx) => (
            <TableRow key={idx} className="text-center">
              {/* 1st Cell */}
              <TableCell className={`border px-0 py-2`}>{idx + 1}</TableCell>

              {/* 2nd Cell */}
              <TableCell className="border px-0 py-2">
                <Input
                  className={`border-none text-center shadow-none`}
                  value={data.id}
                  readOnly
                />
              </TableCell>

              {/* 3rd cell */}

              <TableCell className="border px-0 py-2">
                <Input
                  className={`border-none text-center shadow-none`}
                  value={data.pen.concat('')}
                  readOnly
                />
              </TableCell>

              {/* 4th Cell */}

              <TableCell
                className={` ${data?.startBirds?.confidence <= 0.99 && data?.startBirds?.confidence >= 0.85 ? highConfidence : data?.startBirds?.confidence <= 0.85 && data?.startBirds?.confidence >= 0.8 ? medConfidence : lowConfidence}`}
              >
                <Input
                  className={`border-none text-center shadow-none`}
                  value={data.startBirds.value}
                />
              </TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
              <TableCell className="border px-0 py-2">Test</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EditableTable;
