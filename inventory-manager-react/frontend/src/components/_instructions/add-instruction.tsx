import addImage from "../../assets/images/instructions/add-form.png";

function AddInstruction() {
  return (
    <>
      <ol className="space-y-4 list-decimal pl-6 pb-6">
        <li>
          Mene etusivulle sivun navigaatiopalkissa olevaa logoa tai
          &quot;Koti&quot;-linkkiä klikkaamalla. Mobiililaitteilla linkit saa
          näkyviin painamalla sivun oikeassa yläreunassa olevaa valikko-ikonia.
        </li>
        <li>
          Kirjoita tuotteen nimi &quot;Artikkelin nimi&quot; kenttään. Nimen on
          oltava vähintään yhden kirjaimen mittainen.
        </li>
        <li>
          Kirjoita määrä &quot;Määrä&quot; kenttään. Määrän on oltava numero,
          esimerkiksi 5
        </li>
        <li>
          Valitse yksikkö valikosta avaamalla valikko ja valitsemalla sopiva
          yksikkö. Tuotteen yksikkö on vakiona kappale.
        </li>
        <li>Paina &quot;Lisää&quot;-nappia lisätäksesi tuote jääkaappiin.</li>
      </ol>

      <img src={addImage} alt="Add item form" />

      <p className="space-y-4 list-decimal pt-6 pl-6">
        Yllä oleva kuva näyttää, kuinka lisäät uuden tuotteen lomakkeen avulla.
        Kuvan numerointi vastaa ohjeen numeroita.
      </p>
    </>
  );
}

export default AddInstruction;
