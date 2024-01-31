import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex flex-col gap-2">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"></AvatarImage>
              <AvatarFallback>E</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Corte & Estilo</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center"></div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
