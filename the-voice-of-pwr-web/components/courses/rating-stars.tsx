import { Star } from "lucide-react";

type RatingStarsProps = {
  value: number;
  onChange?: (value: number) => void;
};

export default function RatingStars({ value, onChange }: RatingStarsProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          disabled={!onChange}
          className="disabled:cursor-default"
        >
          <Star
            className={
              star <= Math.round(value)
                ? "h-5 w-5 fill-[#263A99] text-[#263A99]"
                : "h-5 w-5 text-zinc-300"
            }
          />
        </button>
      ))}
    </div>
  );
}
