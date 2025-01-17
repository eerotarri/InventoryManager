import Image from "next/image";
import editNavigate from "../../../../public/images/instructions/edit-navigate.png";
import editForm from "../../../../public/images/instructions/edit-form.png";

function EditInstruction() {
  return (
    <>
      <ol className="space-y-4 list-decimal pl-6 pb-6">
        <li>
          Mene etusivulle sivun navigaatiopalkissa olevaa logoa tai
          &quot;Koti&quot;-linkkiä klikkaamalla. Mobiililaitteilla linkit saa
          näkyviin painamalla sivun oikeassa yläreunassa olevaa valikko-ikonia.
        </li>
        <li>
          Etsi tuote, jonka haluat poistaa, taulukosta. Tuotteet on järjestetty
          vanhimmasta uusimpaan ylhäältä alas.
        </li>
        <li>
          Halutun tuotteen muokkauslomakkeeseen pääsee klikkaamalla tuotetta
          taulukossa. Alla olevaan kuvaan on merkattu sinisellä alue, jota
          painamalla muokkauslomakkeeseen voi navigoida.
        </li>
        <Image src={editNavigate} alt="Add item form" />
        <li>
          Kirjoita tuotteen nimi ensimmäiseen kenttään. Nimen on oltava
          vähintään yhden kirjaimen mittainen.
        </li>
        <li>
          Kirjoita määrä toiseen kenttään. Määrän on oltava numero, esimerkiksi
          5.
        </li>
        <li>
          Valitse yksikkö valikosta avaamalla valikko ja valitsemalla sopiva
          yksikkö.
        </li>
        <li>Paina &quot;Lisää&quot;-nappia vahvistaaksesi muokkauksen.</li>
        <Image src={editForm} alt="Add item form" />
      </ol>
    </>
  );
}

export default EditInstruction;
