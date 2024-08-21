type FridgeItem = {
  id: string; // Uniikki tunniste jokaiselle tuotteelle
  name: string; // Tuotteen nimi
  quantity: number; // Tuotteen määrä, esim. lukumäärä tai paino
  suffix: string;
  expirationDate?: Date; // Viimeinen käyttöpäivä (valinnainen)
};
