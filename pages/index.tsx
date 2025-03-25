
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Thermometer, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className=\"flex flex-col items-center justify-center p-6 space-y-6\">
      <h1 className=\"text-2xl font-bold text-center\">Farmacia Sant Jordi</h1>

      <Card className=\"rounded-2xl shadow-md w-full max-w-md\">
        <CardContent className=\"p-6 text-center\">
          <Thermometer className=\"mx-auto w-8 h-8 text-blue-600\" />
          <p className=\"text-lg mt-2\">Temperatura actual</p>
          <p className=\"text-3xl font-bold text-green-600\">5.2 °C</p>
          <p className=\"text-sm text-gray-500\">Cámara refrigerada</p>
        </CardContent>
      </Card>

      <Card className=\"rounded-2xl shadow-md w-full max-w-md bg-red-100\">
        <CardContent className=\"p-6 text-center\">
          <Bell className=\"mx-auto w-8 h-8 text-red-600\" />
          <p className=\"text-lg font-bold text-red-700\">¡Atención!</p>
          <p className=\"text-sm text-red-700\">Temperatura fuera de rango en la nevera</p>
        </CardContent>
      </Card>

      <Card className=\"rounded-2xl shadow-md w-full max-w-md\">
        <CardContent className=\"p-6 text-center\">
          <FileText className=\"mx-auto w-8 h-8 text-blue-600\" />
          <p className=\"text-lg font-semibold mt-2\">Informe diario</p>
          <p className=\"text-sm text-gray-600 mb-4\">Pulsa para firmar</p>
          <Button className=\"w-full text-lg py-6\">Firmar ahora</Button>
        </CardContent>
      </Card>

      <div className=\"text-center\">
        <p className=\"text-sm text-gray-500\">¿Necesitas ayuda?</p>
        <p className=\"text-sm font-bold text-blue-600\">Llama al 600 000 000</p>
      </div>
    </div>
  );
}
