import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX } from "react";

interface InfoCardProps {
  title: string;
  icon: JSX.Element;
  amount: number;
  description: string;
  idx: number;
}

const InfoCard = ({ title, icon, amount, description, idx }: InfoCardProps) => {
  return (
    <Card className={idx === 2 ? "col-span-2 md:col-span-1" : ""}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{amount}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
