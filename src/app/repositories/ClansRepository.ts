import { ClansInterface } from "../models/ClansInterface";

export const CLANS_DATA: ClansInterface[] = [
  {
    name: "Brujah",
    personCreation:
      'Os Brujah normalmente têm conceitos violentos e criminosos, mas também podem ter temperamentos mais intelectuais ou sociais. Suas naturezas e comportamentos tendem a ser agressivos e similares em todos os membros, pois os Brujah costumam "vestir a camisa" de suas causas (isto é, quando usam camisas). Personagens fisicamente bem dotados são predominantes entre os membros do clã.',
    weakness:
      "A dificuldade de resistir ao frenesi é mais alta para os membros do clã Brujah. Aqueles personagens de nível inferior a 3 entra em frenesi automaticamente ao sentir o cheiro de sangue, não evitando ações de ataque. A paixão ardente é tanto a bênção quanto a maldição de um Brujah. Apesar de serem rápidos para adotar uma causa, eles são igualmente velozes para entrar em frenesi. Obviamente, os Brujah negam radicalmente esta tendência à excitação e se tornam bastantes hostis quando o assunto é mencionado.",
    reputation:
      "O clã Brujah é principalmente composto de rebeldes, com e sem causa. Individualistas, extrovertidos e turbulentos, os Brujah carregam o desejo da mudança social dentro de seus corações mortos e a hierarquia do clã contém alguns dos Membros mais violentos da Camarilla. Muitos vampiros vêem os Brujah como nada mais do que marginais e desencaminhados, mas a verdade dos fatos é que uma paixão genuína se esconde por trás de suas polêmicas.",
    image: "/assets/clans/brujah.png",
    disciplines: ["Potência", "Rapidez", "Presença"]
  }
  // { name: "Gangrel", image: "/assets/clans/gangrel.png" },
  // { name: "Malkaviano", image: "/assets/clans/malkavian.png" },
  // { name: "Nosferatu", image: "/assets/clans/nosferatu.png" },
  // { name: "Toreador", image: "/assets/clans/toreador.png" },
  // { name: "Tremere", image: "/assets/clans/tremere.png" },
  // { name: "Ventrue", image: "/assets/clans/ventrue.png" }
];
