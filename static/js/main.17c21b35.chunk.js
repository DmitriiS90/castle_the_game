(this.webpackJsonpmygame=this.webpackJsonpmygame||[]).push([[0],[,,,,,,,,,,,function(e,c,t){e.exports={inventory:"Inventory_inventory__1gcXS",cell:"Inventory_cell__2e2G8",inventoryImg:"Inventory_inventoryImg__2h0m2"}},,function(e,c,t){e.exports={startLocation:"StartLocation_startLocation__KDJgz",door:"StartLocation_door__bn163",linkButton:"StartLocation_linkButton__3fJu4",menuDoor:"StartLocation_menuDoor__1P0CZ",passage:"StartLocation_passage__3UOhP",menuPassage:"StartLocation_menuPassage__2oa4Z"}},function(e,c,t){e.exports={startLocationOpenDoor:"StartLocationOpenDoor_startLocationOpenDoor__2aU0r",passage:"StartLocationOpenDoor_passage__2GsV_",linkButton:"StartLocationOpenDoor_linkButton__3kEZK",menuPassage:"StartLocationOpenDoor_menuPassage__395NJ",passage2:"StartLocationOpenDoor_passage2__2zp--"}},function(e,c,t){e.exports={prison:"Prison_prison__WKZN_",door:"Prison_door__2wWYk",linkButton:"Prison_linkButton__1m2e8",menuDoor:"Prison_menuDoor__2XYmt",door2:"Prison_door2__3HxmI"}},function(e,c,t){e.exports={room:"Room_room__29vTf",chest:"Room_chest__147QR",linkButton:"Room_linkButton__1wU-f",menuChest:"Room_menuChest__4_HIE",doorToNextRoom:"Room_doorToNextRoom__1vn73",menu:"Room_menu__1HrUU"}},function(e,c,t){e.exports={kingsRoom:"KingsRoom_kingsRoom__2fj4z",watch:"KingsRoom_watch__39FWW",linkButton:"KingsRoom_linkButton__aTyvY",menu:"KingsRoom_menu__1_pDA",wardrobe:"KingsRoom_wardrobe__3nTJI"}},,,,function(e,c,t){e.exports={hall:"Hall_hall__1QoHM",inessa:"Hall_inessa__3j0Mt",edvard:"Hall_edvard__3PiWr",karl:"Hall_karl__1LIkR"}},function(e,c,t){e.exports={hallway:"Hallway_hallway__EGbQN",doorToKingsRoom:"Hallway_doorToKingsRoom__TrQ94",linkButton:"Hallway_linkButton__3tnXJ",menu:"Hallway_menu__1-tVH"}},,,,,,,,function(e,c,t){e.exports={placeWithCrowbar:"PlaceWithCrowbar_placeWithCrowbar__1dky5",crowbar:"PlaceWithCrowbar_crowbar__2P6Wt"}},function(e,c,t){e.exports={storage:"Storage_storage__2izaS",lock:"Storage_lock__2ejHk"}},,,function(e,c,t){e.exports={menu:"Menu_menu__3t9jx"}},function(e,c,t){e.exports={way:"Way_way__33yL9"}},function(e,c,t){e.exports={Deadlock:"Deadlock_Deadlock__3zYG4"}},function(e,c,t){e.exports={men:"MenInPrison_men__2a2ZK"}},function(e,c,t){e.exports={skeletons:"Skeletons_skeletons__1jKiL"}},function(e,c,t){e.exports={roomWithGuards:"RoomWithGuards_roomWithGuards__AvN9E"}},function(e,c,t){e.exports={epilogue:"Epilogue_epilogue__2tI5p"}},,,,,function(e,c,t){},function(e,c,t){},,,,,,,function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(23),r=t.n(i),a=(t(45),t(6)),o=(t(46),t(3)),j=t(11),l=t.n(j),O=t(0),b=Object(o.b)((function(e){return{inventory:e.inventory}}),{})((function(e){var c=Object(o.c)();return Object(O.jsxs)("div",{className:l.a.inventory,children:[!e.inventory.isClick&&Object(O.jsx)("img",{onClick:function(){c({type:"SET_INVENTORY"})},className:l.a.inventoryImg,src:"https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg"}),e.inventory.isClick&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:l.a.cell,children:e.inventory.chestKey?Object(O.jsx)("img",{src:"https://cs5.livemaster.ru/storage/7b/cc/fd75b4b7aa87c532df15a58ffdgx--dlya-ukrashenij-podveska-klyuch-vintazhnyj.jpg"}):null}),Object(O.jsx)("div",{className:l.a.cell,children:e.inventory.crowbar?Object(O.jsx)("img",{src:"https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg"}):null}),Object(O.jsx)("div",{className:l.a.cell}),Object(O.jsx)("div",{className:l.a.cell}),Object(O.jsx)("div",{className:l.a.cell}),Object(O.jsx)("div",{className:l.a.cell}),Object(O.jsx)("div",{className:l.a.cell}),Object(O.jsx)("div",{className:l.a.cell,children:e.inventory.clockHands?Object(O.jsx)("img",{src:"https://magazinrukodelie.host.webasyst.com/wa-data/public/shop/products/84/86/38684/images/3355/3355.750x0.jpg"}):null}),Object(O.jsx)("div",{className:l.a.cell,children:e.inventory.picture?Object(O.jsx)("img",{src:"https://i.pinimg.com/originals/45/dd/ff/45ddff4ac7922e5f9da75c49df3ac32d.jpg"}):null}),Object(O.jsx)("img",{onClick:function(){c({type:"REMOVE_INVENTORY"})},className:l.a.inventoryImg,src:"https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg"})]})]})})),d=t(34),u=t.n(d),h=t(5),x=function(e){return Object(O.jsx)("div",{className:u.a.menu,children:Object(O.jsx)(h.b,{to:"/startLocation",children:Object(O.jsx)("p",{children:"\u0418\u0433\u0440\u0430\u0442\u044c"})})})},_=t(7),p=t(13),m=t.n(p),k=function(e){var c=Object(o.c)(),t=Object(o.d)((function(e){return e.persons.startText})),s=Object(o.d)((function(e){return e.inventory.crowbar})),i=Object(n.useState)(!1),r=Object(_.a)(i,2),a=r[0],j=r[1];return Object(O.jsxs)("div",{className:m.a.startLocation,children:[t.isClick&&Object(O.jsx)("p",{onClick:function(){c({type:"SET_START_TEXT"})},children:t.speech}),!t.isClick&&Object(O.jsxs)("div",{className:m.a.door,children:[Object(O.jsx)("div",{className:m.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:m.a.menuDoor,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u0417\u0430\u043a\u0440\u044b\u0442\u043e"}),s&&!a&&Object(O.jsx)("li",{onClick:function(){j(!0),c({type:"USE_CROWBAR"})},children:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043c"}),a&&Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/prison",children:"\u041f\u0440\u043e\u0439\u0442\u0438"})})]})})]}),!t.isClick&&Object(O.jsxs)("div",{className:m.a.passage,children:[Object(O.jsx)("div",{className:m.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:m.a.menuPassage,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/startLocationOpenDoor",children:"\u041f\u0440\u043e\u0439\u0442\u0438"})})})})]})]})},v=t(14),f=t.n(v),C=t(35),y=t.n(C),N=function(e){var c=e.url,t=e.way;return Object(O.jsx)("div",{className:y.a.way,children:Object(O.jsx)(h.b,{to:c,children:Object(O.jsx)("button",{children:t})})})},g=function(e){return Object(O.jsxs)("div",{className:f.a.startLocationOpenDoor,children:[Object(O.jsx)(N,{url:"/startLocation",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),Object(O.jsxs)("div",{className:f.a.passage,children:[Object(O.jsx)("div",{className:f.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:f.a.menuPassage,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/deadlock",children:"\u041f\u0440\u043e\u0439\u0442\u0438"})})})})]}),Object(O.jsxs)("div",{className:f.a.passage2,children:[Object(O.jsx)("div",{className:f.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:f.a.menuPassage,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/placeWithCrowbar",children:"\u041f\u0440\u043e\u0439\u0442\u0438"})})})})]})]})},S=t(36),E=t.n(S),T=function(e){var c=Object(o.d)((function(e){return e.persons.player})),t=Object(n.useState)(!0),s=Object(_.a)(t,2),i=s[0],r=s[1];return Object(O.jsxs)("div",{className:E.a.Deadlock,children:[!i&&Object(O.jsx)(N,{url:"/startLocationOpenDoor",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),c.isKing&&Object(O.jsx)(N,{url:"/roomWithGuards",way:"\u041f\u043e\u0434\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0435"}),i&&!c.isKing&&Object(O.jsx)("p",{onClick:function(){r(!1)},children:"\u0412\u044b \u0441\u043b\u044b\u0448\u0438\u0442\u0435, \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0433\u043e\u043b\u043e\u0441\u0430 \u043d\u0430\u0432\u0435\u0440\u0445\u0443 \u0438 \u043d\u0435 \u0440\u0435\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u043e\u0434\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0435"})]})},R=t(30),w=t.n(R),L=function(e){var c=Object(o.c)(),t=Object(o.d)((function(e){return e.inventory.crowbar}));return Object(O.jsxs)("div",{className:w.a.placeWithCrowbar,children:[Object(O.jsx)(N,{url:"/startLocationOpenDoor",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),!t&&Object(O.jsx)("div",{className:w.a.crowbar,children:Object(O.jsx)("img",{onClick:function(){c({type:"SET_CROWBAR"})},src:"https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg"})})]})},I=t(15),K=t.n(I),D=function(e){return Object(O.jsxs)("div",{className:K.a.prison,children:[Object(O.jsx)(N,{url:"/startLocation",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),Object(O.jsxs)("div",{className:K.a.door,children:[Object(O.jsx)("div",{className:K.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:K.a.menuDoor,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/skeletons",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})})})})]}),Object(O.jsxs)("div",{className:K.a.door2,children:[Object(O.jsx)("div",{className:K.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:K.a.menuDoor,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/menInPrison",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})})})})]})]})},P=t(37),A=t.n(P),H=function(e){var c=Object(n.useState)(!0),t=Object(_.a)(c,2),s=t[0],i=t[1],r=Object(n.useState)(0),a=Object(_.a)(r,2),j=a[0],l=a[1],b=Object(o.c)(),d=Object(o.d)((function(e){return e.persons.menInPrison})),u=Object(o.d)((function(e){return e.persons.player}));return console.log(u),Object(O.jsxs)("div",{className:A.a.men,children:[!s&&Object(O.jsx)(N,{url:"/prison",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),s&&Object(O.jsx)("p",{onClick:function(){i(!1),b({type:"MEN_IN_PRISON"}),b({type:"GET_INFORMATION_ABOUT_MYSELF"})},children:"\u0412\u044b \u0432\u0438\u0434\u0435\u0442\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"}),d.isClick&&Object(O.jsxs)("div",{children:[0===j?Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439: ",d.speech[0]]})}):1===j?Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439: ",d.speech[1]]})}):2===j&&Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439: ",d.speech[2]]})}),Object(O.jsxs)("ol",{children:[0===j&&Object(O.jsx)("li",{onClick:function(){l(1)},children:u.speechInPrison[0]}),0===j&&Object(O.jsx)("li",{onClick:function(){l(2)},children:u.speechInPrison[1]}),1===j&&Object(O.jsx)("li",{onClick:function(){l(3)},children:u.speechInPrison[2]}),2===j&&Object(O.jsx)("li",{onClick:function(){l(3)},children:u.speechInPrison[3]})]})]})]})},B=t(38),W=t.n(B),G=function(e){return Object(O.jsx)("div",{className:W.a.skeletons,children:Object(O.jsx)(N,{url:"/prison",way:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})})},U=t(39),M=t.n(U),F=function(e){var c=Object(n.useState)(!0),t=Object(_.a)(c,2),s=(t[0],t[1],Object(n.useState)(0)),i=Object(_.a)(s,2),r=i[0],a=i[1],j=Object(o.c)(),l=Object(o.d)((function(e){return e.persons.guards})),b=Object(o.d)((function(e){return e.persons.player})),d=Object(o.d)((function(e){return e.inventory.chestKey}));return Object(O.jsxs)("div",{className:M.a.roomWithGuards,children:[2===r||d?Object(O.jsx)(N,{url:"/room",way:"\u043f\u0440\u043e\u0439\u0442\u0438"}):null,"locked"===b.chest&&Object(O.jsxs)(O.Fragment,{children:[!l.isClick&&Object(O.jsx)("p",{onClick:function(){j({type:"GUARDS"})},children:l.speech[0]}),l.isClick&&Object(O.jsxs)("div",{children:[0===r?Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u0421\u0442\u0440\u0430\u0436\u0430: ",l.speech[0]]})}):1===r?Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u0421\u0442\u0440\u0430\u0436\u0430: ",l.speech[1]]})}):2===r&&Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["-\u0421\u0442\u0440\u0430\u0436\u0430: ",l.speech[2]]})}),Object(O.jsxs)("ol",{children:[0===r&&Object(O.jsx)("li",{onClick:function(){a(r+1)},children:b.speechWithGuards[0]}),0===r&&Object(O.jsx)("li",{onClick:function(){a(r+1)},children:b.speechWithGuards[1]}),1===r&&Object(O.jsx)("li",{onClick:function(){a(r+1)},children:b.speechWithGuards[2]})]})]})]}),"clicked"===b.chest&&!d&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["-\u0421\u0442\u0440\u0430\u0436\u0430: ",l.speech[1]]}),Object(O.jsx)("ol",{children:Object(O.jsx)("li",{onClick:function(){j({type:"GET_CHEST_KEY"})},children:b.speechWithGuards[3]})})]})]})},Y=t(16),V=t.n(Y),z=function(e){var c=Object(n.useState)(!1),t=Object(_.a)(c,2),s=t[0],i=t[1],r=Object(o.c)(),a=Object(o.d)((function(e){return e.persons.player})),j=Object(o.d)((function(e){return e.inventory.chestKey}));return console.log(j),Object(O.jsxs)("div",{className:V.a.room,children:[Object(O.jsx)(N,{url:"/roomWithGuards",way:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),s&&Object(O.jsx)("p",{onClick:function(){i(!1)},children:"\u0412\u044b \u043d\u0430\u0448\u043b\u0438 \u0441\u0442\u0440\u0435\u043b\u043a\u0438 \u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(O.jsxs)("div",{className:V.a.chest,children:[Object(O.jsx)("div",{className:V.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:V.a.menuChest,children:Object(O.jsxs)("ul",{children:["locked"===a.chest&&Object(O.jsx)("li",{onClick:function(){r({type:"CLICK_CHEST"})},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),"clicked"===a.chest&&!j&&Object(O.jsx)("li",{children:"\u041d\u0443\u0436\u0435\u043d \u043a\u043b\u044e\u0447"}),j&&Object(O.jsx)("li",{onClick:function(){r({type:"USE_CHEST_KEY"}),r({type:"GET_CLOCK_HANDS"}),r({type:"GET_PICTURE"}),r({type:"CHEST_IS_OPENED"}),i(!0)},children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447"})]})})]}),Object(O.jsxs)("div",{className:V.a.doorToNextRoom,children:[Object(O.jsx)("div",{className:V.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:V.a.menu,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/hall",children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0432 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0437\u0430\u043b"})})})})]})]})},J=t(21),X=t.n(J),Z=function(e){var c=Object(n.useState)(!0),t=Object(_.a)(c,2),s=t[0],i=t[1],r=Object(o.c)(),a=(Object(o.d)((function(e){return e.persons.player})),Object(o.d)((function(e){return e.persons.inessa}))),j=Object(o.d)((function(e){return e.persons.edvard})),l=Object(o.d)((function(e){return e.persons.karl}));return Object(O.jsxs)("div",{className:X.a.hall,children:[Object(O.jsx)(N,{url:"/hallway",way:"\u041f\u043e\u0434\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0435"}),Object(O.jsx)(N,{url:"/room",way:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),s&&Object(O.jsx)("p",{onClick:function(){i(!1)},children:"\u041d\u0430 \u0432\u0430\u0441 \u0441\u043c\u043e\u0442\u0440\u044f\u0442"}),a.isClick&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["-\u0418\u043d\u0435\u0441\u0441\u0430: ",a.speech[0]]}),Object(O.jsx)("ol",{children:Object(O.jsx)("li",{onClick:function(){r({type:"OUT_FROM_INESSA"})},children:"22222222"})})]}),j.isClick&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["-\u0415\u0434\u0432\u0430\u0440\u0434: ",j.speech[0]]}),Object(O.jsx)("ol",{children:Object(O.jsx)("li",{onClick:function(){r({type:"OUT_FROM_EDVARD"})},children:"22222222"})})]}),l.isClick&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["-\u041a\u0430\u0440\u043b: ",l.speech[0]]}),Object(O.jsx)("ol",{children:Object(O.jsx)("li",{onClick:function(){r({type:"OUT_FROM_KARL"})},children:"22222222"})})]}),Object(O.jsx)("div",{className:X.a.inessa,onClick:function(){r({type:"TALK_TO_INESSA"})}}),Object(O.jsx)("div",{className:X.a.edvard,onClick:function(){r({type:"TALK_TO_EDVARD"})}}),Object(O.jsx)("div",{className:X.a.karl,onClick:function(){r({type:"TALK_TO_KARL"})}})]})},Q=t(22),q=t.n(Q),$=function(e){return Object(O.jsxs)("div",{className:q.a.hallway,children:[Object(O.jsx)(N,{url:"/hall",way:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),Object(O.jsxs)("div",{className:q.a.doorToKingsRoom,children:[Object(O.jsx)("div",{className:q.a.linkButton,children:Object(O.jsx)("button",{})}),Object(O.jsx)("div",{className:q.a.menu,children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/kingsRoom",children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0432 \u0441\u0432\u043e\u044e \u043a\u043e\u043c\u043d\u043e\u0442\u0443"})})})})]})]})},ee=t(17),ce=t.n(ee),te=function(e){var c=Object(o.c)(),t=Object(o.d)((function(e){return e.persons.player})),s=Object(o.d)((function(e){return e.inventory.clockHands})),i=Object(n.useState)(0),r=Object(_.a)(i,2),a=r[0],j=r[1];return Object(O.jsxs)("div",{className:ce.a.kingsRoom,children:[Object(O.jsx)(N,{url:"/hallway",way:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),!t.kingsRoom&&Object(O.jsx)("p",{onClick:function(){c({type:"CHECKED_KINGSROOM"})},children:"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u0432\u043e\u044e \u043a\u043e\u043c\u043d\u043e\u0442\u0443"}),1===a&&Object(O.jsx)("p",{onClick:function(){j(0)},children:"\u0427\u0430\u0441\u044b \u0431\u0435\u0441 \u0441\u0442\u0440\u0435\u043b\u043e\u043a??"}),2===a&&Object(O.jsx)("p",{onClick:function(){j(0)},children:"\u0428\u043a\u0430\u0444 \u0437\u0430\u043a\u0440\u044b\u0442\u043e"}),Object(O.jsxs)("div",{className:ce.a.watch,children:[Object(O.jsx)("div",{className:ce.a.linkButton}),Object(O.jsx)("div",{className:ce.a.menu,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){j(1)},children:"\u041e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0447\u0430\u0441\u044b"}),s&&Object(O.jsx)("li",{onClick:function(){c({type:"SET_CLOCK_HANDS"}),c({type:"USE_CLOCK_HANDS"})},children:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0435\u043b\u043a\u0438 \u0432 \u0447\u0430\u0441\u044b"})]})})]}),Object(O.jsxs)("div",{className:ce.a.wardrobe,children:[Object(O.jsx)("div",{className:ce.a.linkButton}),Object(O.jsx)("div",{className:ce.a.menu,children:Object(O.jsxs)("ul",{children:[!t.setClockHands&&Object(O.jsx)("li",{onClick:function(){j(2)},children:"\u041e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0448\u043a\u0430\u0444"}),t.setClockHands&&Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/storage",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})})]})})]})]})},ne=t(31),se=t.n(ne),ie=function(e){var c=Object(n.useState)({num:0,code:"0"}),t=Object(_.a)(c,2),s=t[0],i=t[1],r=Object(o.c)();Object(o.d)((function(e){return e.persons.player}));return Object(O.jsxs)("div",{className:se.a.storage,children:[Object(O.jsx)(N,{url:"/kingsRoom",way:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),8!=s.num&&Object(O.jsxs)("div",{className:se.a.lock,children:[Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"1"})},children:"1"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"2"})},children:"2"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"3"})},children:"3"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"4"})},children:"4"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"5"})},children:"5"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"6"})},children:"6"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"7"})},children:"7"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"8"})},children:"8"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"9"})},children:"9"}),Object(O.jsx)("button",{onClick:function(){i({num:s.num+1,code:s.code+"0"})},children:"0"})]}),8===s.num&&"011071325"!=s.code&&Object(O.jsx)(h.b,{to:"/kingsRoom",children:Object(O.jsx)("p",{children:"\u041d\u0435 \u0432\u0435\u0440\u043d\u043e!!!!!!!!!!!"})}),8===s.num&&"011071325"===s.code&&Object(O.jsx)("p",{onClick:function(){r({type:"OPEN_LOCK"})},children:"\u0412\u0435\u0440\u043d\u043e!!!!!!!!!!!"})]})},re=t(40),ae=t.n(re),oe=function(e){return Object(O.jsx)("div",{className:ae.a.epilogue})},je=function(e){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(b,{}),Object(O.jsx)(a.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(x,{})}}),Object(O.jsx)(a.a,{exact:!0,path:"/startLocation",render:function(){return Object(O.jsx)(k,{})}}),Object(O.jsx)(a.a,{exact:!0,path:"/startLocationOpenDoor",render:function(){return Object(O.jsx)(g,{})}}),Object(O.jsx)(a.a,{exact:!0,path:"/deadlock",render:function(){return Object(O.jsx)(T,{})}}),Object(O.jsx)(a.a,{exact:!0,path:"/placeWithCrowbar",render:function(){return Object(O.jsx)(L,{})}}),Object(O.jsx)(a.a,{path:"/prison",render:function(){return Object(O.jsx)(D,{})}}),Object(O.jsx)(a.a,{path:"/menInPrison",render:function(){return Object(O.jsx)(H,{})}}),Object(O.jsx)(a.a,{path:"/skeletons",render:function(){return Object(O.jsx)(G,{})}}),Object(O.jsx)(a.a,{path:"/roomWithGuards",render:function(){return Object(O.jsx)(F,{})}}),Object(O.jsx)(a.a,{path:"/room",render:function(){return Object(O.jsx)(z,{})}}),Object(O.jsx)(a.a,{path:"/hall",render:function(){return Object(O.jsx)(Z,{})}}),Object(O.jsx)(a.a,{path:"/hallway",render:function(){return Object(O.jsx)($,{})}}),Object(O.jsx)(a.a,{path:"/kingsRoom",render:function(){return Object(O.jsx)(te,{})}}),Object(O.jsx)(a.a,{path:"/storage",render:function(){return Object(O.jsx)(ie,{})}}),Object(O.jsx)(a.a,{path:"/epilogue",render:function(){return Object(O.jsx)(oe,{})}})]})},le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),i(e),r(e)}))},Oe=t(20),be=t(2),de={isClick:!1,key:!1,crowbar:!1,chestKey:!1,clockHands:!1,picture:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_INVENTORY":return Object(be.a)(Object(be.a)({},e),{},{isClick:!0});case"REMOVE_INVENTORY":return Object(be.a)(Object(be.a)({},e),{},{isClick:!1});case"SET_CROWBAR":return Object(be.a)(Object(be.a)({},e),{},{crowbar:!0});case"USE_CROWBAR":return Object(be.a)(Object(be.a)({},e),{},{crowbar:!1});case"GET_CHEST_KEY":return Object(be.a)(Object(be.a)({},e),{},{chestKey:!0});case"USE_CHEST_KEY":return Object(be.a)(Object(be.a)({},e),{},{chestKey:!1});case"GET_CLOCK_HANDS":return Object(be.a)(Object(be.a)({},e),{},{clockHands:!0});case"USE_CLOCK_HANDS":return Object(be.a)(Object(be.a)({},e),{},{clockHands:!1});case"GET_PICTURE":return Object(be.a)(Object(be.a)({},e),{},{picture:!0});case"USE_PICTURE":return Object(be.a)(Object(be.a)({},e),{},{picture:!1});default:return e}},he={player:{isKing:!1,chest:"locked",kingsRoom:!1,setClockHands:!1,isOpenedLock:!1,speechInPrison:["\u0412 \u043a\u0430\u043a\u043e\u043c \u0441\u043c\u044b\u0441\u043b\u0435 \u0436\u0438\u0432? \u042f \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043c\u0435\u0440\u0442\u0432\u044b\u043c?","\u041a\u0442\u043e \u0442\u044b? \u041a\u0430\u043a \u043f\u043e\u043f\u0430\u043b \u0437\u0430 \u0440\u0435\u0448\u0435\u0442\u043a\u0443?","\u0421\u0435\u0440\u044c\u0435\u0437\u043d\u043e","\u041a\u0440\u0430\u0441\u0430\u0432\u0435\u0446"],speechWithGuards:["\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438","\u0412\u044b \u0437\u043d\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0441\u043e \u043c\u043d\u043e\u0439 \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u0442\u044c","111","\u0414\u0430\u0432\u0430\u0439 \u043a\u043b\u044e\u0447"]},startText:{isClick:!0,speech:"\u0412\u044b \u043e\u0442\u0447\u043d\u0443\u043b\u0438\u0441\u044c \u0432 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435, \u043f\u043e\u0445\u043e\u0436\u0438\u043c \u043d\u0430 \u0442\u044e\u0440\u044c\u043c\u0443. \u0421\u0438\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u0438\u0442 \u0433\u043e\u043b\u043e\u0432\u0430, \u043a\u0430\u043a-\u0431\u0443\u0434\u0442\u043e \u043a\u0442\u043e-\u0442\u043e \u0443\u0434\u0430\u0440\u0438\u043b \u043f\u043e \u043d\u0435\u0439. \u0412 \u0433\u0440\u0443\u0434\u0438 \u0433\u0438\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u0440\u0430\u043d\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043d\u0430\u0439\u0442\u0438, \u0447\u0435\u043c \u0435\u0451 \u043f\u0435\u0440\u0435\u0432\u0435\u0437\u0430\u0442\u044c.\u041f\u0435\u0440\u0435\u0434 \u0432\u0430\u043c\u0438 \u0434\u0432\u0435 \u0434\u0432\u0435\u0440\u0438 - \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u044b\u0441\u043a\u0430\u0442\u044c \u0432\u044b\u0445\u043e\u0434 \u043e\u0442\u0441\u044e\u0434\u0430, \u0438\u043d\u0430\u0447\u0435 \u0432\u0430\u043c \u043d\u0435\u0432\u044b\u043a\u043e\u0440\u043e\u0431\u043a\u0430\u0442\u044c\u0441\u044f."},menInPrison:{isClick:!1,speech:["\u0412\u044b \u0436\u0438\u0432\u044b?!. \u041d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e.","\u0412\u044b \u043a\u0430\u0440\u043e\u043b\u044c","\u042f \u043f\u044b\u0442\u0430\u043b\u0441\u044f \u0441\u043f\u0430\u0441\u0442\u0438 \u0432\u0430\u0441"]},guards:{isClick:!1,speech:["\u0421\u0442\u043e\u0439, \u043a\u0442\u043e \u0438\u0434\u0435\u0442?. \u0401\u043f\u0442, \u043d\u0430\u0448 \u043a\u043e\u0440\u043e\u043b\u044c!!","\u041d\u0443\u0436\u0435\u043d \u043a\u043b\u044e\u0447 \u043e\u0442 \u0441\u0443\u043d\u0434\u0443\u043a\u0430?"]},inessa:{isClick:!1,speech:["\u0401\u0401\u0401\u0401\u0401\u0401\u043f"]},edvard:{isClick:!1,speech:["\u0422\u044b\u044b\u044b"]},karl:{isClick:!1,speech:["\u0427\u0442\u043e\u043e"]}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_START_TEXT":return Object(be.a)(Object(be.a)({},e),{},{startText:{isClick:!1}});case"MEN_IN_PRISON":return Object(be.a)(Object(be.a)({},e),{},{menInPrison:Object(be.a)(Object(be.a)({},e.menInPrison),{},{isClick:!0})});case"GET_INFORMATION_ABOUT_MYSELF":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{isKing:!0})});case"CHECKED_KINGSROOM":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{kingsRoom:!0})});case"SET_CLOCK_HANDS":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{setClockHands:!0})});case"GUARDS":return Object(be.a)(Object(be.a)({},e),{},{guards:Object(be.a)(Object(be.a)({},e.guards),{},{isClick:!0})});case"CLICK_CHEST":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{chest:"clicked"})});case"CHEST_IS_OPENED":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{chest:"opened"})});case"OPEN_LOCK":return Object(be.a)(Object(be.a)({},e),{},{player:Object(be.a)(Object(be.a)({},e.player),{},{isOpenedLock:!0})});case"TALK_TO_INESSA":return Object(be.a)(Object(be.a)({},e),{},{inessa:Object(be.a)(Object(be.a)({},e.inessa),{},{isClick:!0})});case"OUT_FROM_INESSA":return Object(be.a)(Object(be.a)({},e),{},{inessa:Object(be.a)(Object(be.a)({},e.inessa),{},{isClick:!1})});case"TALK_TO_EDVARD":return Object(be.a)(Object(be.a)({},e),{},{edvard:Object(be.a)(Object(be.a)({},e.edvard),{},{isClick:!0})});case"OUT_FROM_EDVARD":return Object(be.a)(Object(be.a)({},e),{},{edvard:Object(be.a)(Object(be.a)({},e.edvard),{},{isClick:!1})});case"TALK_TO_KARL":return Object(be.a)(Object(be.a)({},e),{},{karl:Object(be.a)(Object(be.a)({},e.karl),{},{isClick:!0})});case"OUT_FROM_KARL":return Object(be.a)(Object(be.a)({},e),{},{karl:Object(be.a)(Object(be.a)({},e.karl),{},{isClick:!1})});default:return e}},_e=Object(Oe.b)({inventory:ue,persons:xe}),pe=Object(Oe.c)(_e);window.store=pe;var me=pe;r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(o.a,{store:me,children:Object(O.jsx)(je,{})})})}),document.getElementById("root")),le()}],[[53,1,2]]]);
//# sourceMappingURL=main.17c21b35.chunk.js.map