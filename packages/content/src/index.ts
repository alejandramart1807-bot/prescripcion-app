// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

export * from "./schema.ts";
export * from "./helpers.ts";
export * from "./guides.ts";

import type { Ficha } from "./schema.ts";
import { FICHAS as admision_del_paciente_grave } from "./fichas/admision-del-paciente-grave.ts";
import { FICHAS as valores_de_referencia } from "./fichas/valores-de-referencia.ts";
import { FICHAS as analgesia } from "./fichas/analgesia.ts";
import { FICHAS as anestesiologia } from "./fichas/anestesiologia.ts";
import { FICHAS as cardiologia } from "./fichas/cardiologia.ts";
import { FICHAS as cirugia_general_y_trauma } from "./fichas/cirugia-general-y-trauma.ts";
import { FICHAS as coloproctologia } from "./fichas/coloproctologia.ts";
import { FICHAS as dermatologia } from "./fichas/dermatologia.ts";
import { FICHAS as endocrinologia } from "./fichas/endocrinologia.ts";
import { FICHAS as gastroenterologia_y_hepatologia } from "./fichas/gastroenterologia-y-hepatologia.ts";
import { FICHAS as ginecologia } from "./fichas/ginecologia.ts";
import { FICHAS as obstetricia } from "./fichas/obstetricia.ts";
import { FICHAS as hematologia } from "./fichas/hematologia.ts";
import { FICHAS as infectologia } from "./fichas/infectologia.ts";
import { FICHAS as nefrologia } from "./fichas/nefrologia.ts";
import { FICHAS as neumologia } from "./fichas/neumologia.ts";
import { FICHAS as neurologia } from "./fichas/neurologia.ts";
import { FICHAS as oftalmologia } from "./fichas/oftalmologia.ts";
import { FICHAS as oncologia } from "./fichas/oncologia.ts";
import { FICHAS as ortopedia_y_reumatologia } from "./fichas/ortopedia-y-reumatologia.ts";
import { FICHAS as otorrinolaringologia } from "./fichas/otorrinolaringologia.ts";
import { FICHAS as pediatria } from "./fichas/pediatria.ts";
import { FICHAS as psiquiatria } from "./fichas/psiquiatria.ts";
import { FICHAS as salud_mental_hospital_psiquiatrico } from "./fichas/salud-mental-hospital-psiquiatrico.ts";
import { FICHAS as urologia_uroclin } from "./fichas/urologia-uroclin.ts";
import { FICHAS as causas_externas } from "./fichas/causas-externas.ts";
import { FICHAS as profilaxis } from "./fichas/profilaxis.ts";
import { FICHAS as paciente_critico } from "./fichas/paciente-critico.ts";
import { FICHAS as medicina_interna_piso_y_consulta } from "./fichas/medicina-interna-piso-y-consulta.ts";
import { FICHA as c_glasgow } from "./calculadoras/c-glasgow.ts";
import { FICHA as c_nihss } from "./calculadoras/c-nihss.ts";
import { FICHA as c_abcd2 } from "./calculadoras/c-abcd2.ts";
import { FICHA as c_cthead } from "./calculadoras/c-cthead.ts";
import { FICHA as c_ciwa } from "./calculadoras/c-ciwa.ts";
import { FICHA as c_phq9 } from "./calculadoras/c-phq9.ts";
import { FICHA as c_cha2ds2 } from "./calculadoras/c-cha2ds2.ts";
import { FICHA as c_hasbled } from "./calculadoras/c-hasbled.ts";
import { FICHA as c_heart } from "./calculadoras/c-heart.ts";
import { FICHA as c_timi } from "./calculadoras/c-timi.ts";
import { FICHA as c_wellstep } from "./calculadoras/c-wellstep.ts";
import { FICHA as c_perc } from "./calculadoras/c-perc.ts";
import { FICHA as c_spesi } from "./calculadoras/c-spesi.ts";
import { FICHA as c_wellstvp } from "./calculadoras/c-wellstvp.ts";
import { FICHA as c_qtc } from "./calculadoras/c-qtc.ts";
import { FICHA as c_pam } from "./calculadoras/c-pam.ts";
import { FICHA as c_curb65 } from "./calculadoras/c-curb65.ts";
import { FICHA as c_qsofa } from "./calculadoras/c-qsofa.ts";
import { FICHA as c_news2 } from "./calculadoras/c-news2.ts";
import { FICHA as c_centor } from "./calculadoras/c-centor.ts";
import { FICHA as c_lrinec } from "./calculadoras/c-lrinec.ts";
import { FICHA as c_alvarado } from "./calculadoras/c-alvarado.ts";
import { FICHA as c_child } from "./calculadoras/c-child.ts";
import { FICHA as c_meld } from "./calculadoras/c-meld.ts";
import { FICHA as c_gbs } from "./calculadoras/c-gbs.ts";
import { FICHA as c_bisap } from "./calculadoras/c-bisap.ts";
import { FICHA as c_crcl } from "./calculadoras/c-crcl.ts";
import { FICHA as c_ckdepi } from "./calculadoras/c-ckdepi.ts";
import { FICHA as c_ag } from "./calculadoras/c-ag.ts";
import { FICHA as c_winter } from "./calculadoras/c-winter.ts";
import { FICHA as c_osm } from "./calculadoras/c-osm.ts";
import { FICHA as c_nacorr } from "./calculadoras/c-nacorr.ts";
import { FICHA as c_agua } from "./calculadoras/c-agua.ts";
import { FICHA as c_adrogue } from "./calculadoras/c-adrogue.ts";
import { FICHA as c_cacorr } from "./calculadoras/c-cacorr.ts";
import { FICHA as c_fena } from "./calculadoras/c-fena.ts";
import { FICHA as c_imc } from "./calculadoras/c-imc.ts";
import { FICHA as c_pbw } from "./calculadoras/c-pbw.ts";
import { FICHA as c_holliday } from "./calculadoras/c-holliday.ts";
import { FICHA as c_parkland } from "./calculadoras/c-parkland.ts";
import { FICHA as c_infusion } from "./calculadoras/c-infusion.ts";
import { FICHA as c_ganzoni } from "./calculadoras/c-ganzoni.ts";
import { FICHA as c_mme } from "./calculadoras/c-mme.ts";
import { FICHA as c_cortico } from "./calculadoras/c-cortico.ts";
import { FICHA as c_bishop } from "./calculadoras/c-bishop.ts";
import { FICHA as c_eg } from "./calculadoras/c-eg.ts";
import { FICHA as c_apgar } from "./calculadoras/c-apgar.ts";
import { FICHA as c_westley } from "./calculadoras/c-westley.ts";
import { FICHA as c_ipss } from "./calculadoras/c-ipss.ts";
import { FICHA as c_ottawa } from "./calculadoras/c-ottawa.ts";
import { FICHA as c_padua } from "./calculadoras/c-padua.ts";

export { admision_del_paciente_grave };
export { valores_de_referencia };
export { analgesia };
export { anestesiologia };
export { cardiologia };
export { cirugia_general_y_trauma };
export { coloproctologia };
export { dermatologia };
export { endocrinologia };
export { gastroenterologia_y_hepatologia };
export { ginecologia };
export { obstetricia };
export { hematologia };
export { infectologia };
export { nefrologia };
export { neumologia };
export { neurologia };
export { oftalmologia };
export { oncologia };
export { ortopedia_y_reumatologia };
export { otorrinolaringologia };
export { pediatria };
export { psiquiatria };
export { salud_mental_hospital_psiquiatrico };
export { urologia_uroclin };
export { causas_externas };
export { profilaxis };
export { paciente_critico };
export { medicina_interna_piso_y_consulta };
export { c_glasgow };
export { c_nihss };
export { c_abcd2 };
export { c_cthead };
export { c_ciwa };
export { c_phq9 };
export { c_cha2ds2 };
export { c_hasbled };
export { c_heart };
export { c_timi };
export { c_wellstep };
export { c_perc };
export { c_spesi };
export { c_wellstvp };
export { c_qtc };
export { c_pam };
export { c_curb65 };
export { c_qsofa };
export { c_news2 };
export { c_centor };
export { c_lrinec };
export { c_alvarado };
export { c_child };
export { c_meld };
export { c_gbs };
export { c_bisap };
export { c_crcl };
export { c_ckdepi };
export { c_ag };
export { c_winter };
export { c_osm };
export { c_nacorr };
export { c_agua };
export { c_adrogue };
export { c_cacorr };
export { c_fena };
export { c_imc };
export { c_pbw };
export { c_holliday };
export { c_parkland };
export { c_infusion };
export { c_ganzoni };
export { c_mme };
export { c_cortico };
export { c_bishop };
export { c_eg };
export { c_apgar };
export { c_westley };
export { c_ipss };
export { c_ottawa };
export { c_padua };

/**
 * Todas las fichas, en el MISMO orden que produce DX.sort(...) en
 * index.html: agrupadas por sys según el orden de navegación de la app y,
 * dentro de cada grupo, en el orden en que aparecen en el bloque de datos
 * original (Array.prototype.sort es estable en Node/V8).
 */
export const DX: Ficha[] = [
  ...admision_del_paciente_grave,
  c_glasgow,
  c_nihss,
  c_abcd2,
  c_cthead,
  c_ciwa,
  c_phq9,
  c_cha2ds2,
  c_hasbled,
  c_heart,
  c_timi,
  c_wellstep,
  c_perc,
  c_spesi,
  c_wellstvp,
  c_qtc,
  c_pam,
  c_curb65,
  c_qsofa,
  c_news2,
  c_centor,
  c_lrinec,
  c_alvarado,
  c_child,
  c_meld,
  c_gbs,
  c_bisap,
  c_crcl,
  c_ckdepi,
  c_ag,
  c_winter,
  c_osm,
  c_nacorr,
  c_agua,
  c_adrogue,
  c_cacorr,
  c_fena,
  c_imc,
  c_pbw,
  c_holliday,
  c_parkland,
  c_infusion,
  c_ganzoni,
  c_mme,
  c_cortico,
  c_bishop,
  c_eg,
  c_apgar,
  c_westley,
  c_ipss,
  c_ottawa,
  c_padua,
  ...valores_de_referencia,
  ...analgesia,
  ...anestesiologia,
  ...cardiologia,
  ...cirugia_general_y_trauma,
  ...coloproctologia,
  ...dermatologia,
  ...endocrinologia,
  ...gastroenterologia_y_hepatologia,
  ...ginecologia,
  ...obstetricia,
  ...hematologia,
  ...infectologia,
  ...nefrologia,
  ...neumologia,
  ...neurologia,
  ...oftalmologia,
  ...oncologia,
  ...ortopedia_y_reumatologia,
  ...otorrinolaringologia,
  ...pediatria,
  ...psiquiatria,
  ...salud_mental_hospital_psiquiatrico,
  ...urologia_uroclin,
  ...causas_externas,
  ...profilaxis,
  ...paciente_critico,
  ...medicina_interna_piso_y_consulta,
];
