"use strict";

(function(){

//    TODO: Heather is wanting to join an after school club. She is currently involved with another club at school, but luckily all after
//             school clubs will only meet on one day out of the week. Return a string to Heather as to whether or not she can join another
//             club.

    function canJoinClub() {
        var confirmed = confirm("Does your currently joined club meet on the same day as the other after school club?\n'OK' = yes\n'CANCEL' = no");
        if(confirmed === true) {
            return "Unfortunately, you cannot join the club due to meeting conflicts.";
        } else {
            return "Awesome! You can join this club too!";
        }
    }
    // alert(canJoinClub());

//    TODO: Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food for a
//             twenty percent discount, but the shop changes their prices from week to week. Rodrigo needs to buy tofu, lamb, and potatoes.
//             Return a string to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the
//             items per pound, and also inform him of the savings he's receiving from the store.



}());