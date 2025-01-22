import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function SearchBar<TData>({ table }: DataTableToolbarProps<TData>) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<any>([]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // const filteredItems = table
    //   .getRowModel()
    //   .rows.filter((item: any) =>
    //     item.getValue('title').toLowerCase().includes(inputValue.toLowerCase()),
    //   );
    const filteredItems = table
      .getCoreRowModel()
      .rows.filter((item: any) =>
        item.getValue('title').toLowerCase().includes(inputValue.toLowerCase()),
      );
    table.getColumn('title')?.setFilterValue(inputValue);
    setFilteredData(filteredItems);
    setSearchValue(inputValue);
  };

  const handleSelectItem = (item: any) => {
    setSearchValue(item.getValue('title'));
    table.getColumn('title')?.setFilterValue(item.getValue('title'));
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.replace(
      regex,
      '<span style="background-color: yellow;">$1</span>',
    );
  };

  return (
    <div className="space-y-2">
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
        //   value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
        //   onChange={(event) =>
        //     table.getColumn('title')?.setFilterValue(event.target.value)
        //   }
        icon={<Search size={20} className="text-gray-500" />}
        className="h-8 w-[200px] lg:w-[350px]"
      />

      {searchValue && searchValue !== '' && (
        <ul className="absolute max-h-60 overflow-y-auto scrollbar bg-secondary shadow-md p-2 z-20 w-[200px] lg:w-[350px] rounded-md border-primary border">
          {filteredData.length > 0 && searchValue !== '' ? (
            filteredData.map((item: any) => (
              <li
                key={item.id}
                onClick={() => handleSelectItem(item)}
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.getValue('title'), searchValue),
                }}
              />
            ))
          ) : (
            <p className="text-sm">No results found.</p>
          )}
        </ul>
      )}
    </div>
  );
}
