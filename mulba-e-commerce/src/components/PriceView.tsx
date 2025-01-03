import { cn } from "@/lib/utils";

interface PriceViewProps {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className={className} />
        {price && discount && (
          <PriceFormatter
            amount={price + (price * discount) / 100}
            className={cn("line-through")}
          />
        )}
      </div>
    </>
  );
};

interface PriceFormatterProps {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <span className={(cn("text-sm text-black"), className)}>
      {formattedPrice}
    </span>
  );
};
export default PriceView;
