/* ==========================================================================
   M1N10N W4V3 :: client-side graffiti :: www.infinitycorp.example
   "the admins kept checking the logs instead of the page they shipped"
   ========================================================================== */

(function () {
  "use strict";

  var head = "color:#000;background:#ffe600;font-size:15px;font-weight:bold;padding:3px 7px";
  var leak = "color:#ff2e2e;font-style:italic";
  var tip = "color:#39ff14";

  console.log("%c M1N10N W4V3 ", head);
  console.log("%c uplink established :: this box now belongs to the Minions.", leak);
  console.log("%c hint_0 :: view-source: is free, comrade. admins never read it.", tip);
  console.log("%c hint_1 :: always read what the crawler is allowed to read.", tip);
  console.log("%c hint_2 :: the admins split the master key before we got here. all three pieces are still on this server.", tip);

  document.addEventListener("DOMContentLoaded", function () {
    var restore = document.querySelector("[data-restore]");

    if (restore) {
      restore.addEventListener("click", function (e) {
        e.preventDefault();
        window.alert(
          "RESTORE FAILED (500)\n\n" +
          "admin_password = 'banana'\n" +
          "we rotated it for you. you are welcome.\n\n" +
          "-- MINION HACKERS"
        );
      });
    }
  });
})();
