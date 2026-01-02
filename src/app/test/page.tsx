"use client"
import EditableTable from '@/components/reusableComponents/EditableTable';

const test = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      This is table testing lab{' '}
      <div className="my-4">
        <EditableTable />
      </div>
    </div>
  );
};

export default test;
