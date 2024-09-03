type FridgeItem = {
  id: string; // Uniikki tunniste jokaiselle tuotteelle
  name: string; // Tuotteen nimi
  quantity: number; // Tuotteen määrä, esim. lukumäärä tai paino
  suffix: "kpl" | "l" | "kg";
  createdAt: Date;
  updatedAt: Date;
};
