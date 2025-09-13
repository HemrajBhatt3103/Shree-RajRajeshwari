interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
}

export function MenuItem({ name, price, description }: MenuItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">{name}</span>
          <span className="font-semibold text-gray-800 ml-4">{price}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}