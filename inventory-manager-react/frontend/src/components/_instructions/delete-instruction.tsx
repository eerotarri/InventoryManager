import deleteImage from "../../assets/images/instructions/delete-action.png";

function DeleteInstruction() {
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
          Paina tuotteen rivillä olevaa &quot;X&quot;-nappia. Tuote poistuu heti
          taulukosta, ellei palvelimella tapahdu virhettä.
        </li>
      </ol>
      <p className="pb-6 text-l font-bold">
        HUOM! Tuotteen poistoa ei voi peruuttaa. Ole siis varma tuotteen
        poistosta ennen napin painallusta. Tuotteen voi palauttaa lisäämällä sen
        uudelleen jääkaappiin tuotteen lisäyksen ohjeiden mukaisesti.
      </p>

      <img src={deleteImage} alt="Add item form" />

      <p className="space-y-4 list-decimal pt-6">
        Yllä oleva kuva osoittaa, miltä tuotteen poistaminen näyttää. Kuvan
        sininen nuoli osoittaa maidon jääkaapista poistavaa nappia.
      </p>
    </>
  );
}

export default DeleteInstruction;
