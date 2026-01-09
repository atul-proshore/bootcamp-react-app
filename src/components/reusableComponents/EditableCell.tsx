import { Edit3 } from 'lucide-react';
import React from 'react';

const EditableCell = () => {
  return (
    <div className="hover:bg-liner-to-r group relative cursor-pointer rounded-lg border border-transparent px-3 py-3 transition-all duration-300 hover:border-indigo-200 hover:from-indigo-50 hover:to-purple-50 hover:shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-medium transition-colors duration-300 group-hover:text-indigo-700">
          Value
        </span>
        <Edit3 size={12} className="text-blue-500" />
      </div>
    </div>
  );
};

export default EditableCell;
