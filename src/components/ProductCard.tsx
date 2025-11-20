import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="bg-[#1a1a1a] p-8 flex items-center justify-center h-48">
          <img src={image} alt={title} className="h-32 w-auto object-contain" />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium mb-2 text-article-heading">{title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-article-heading">{price}</span>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
