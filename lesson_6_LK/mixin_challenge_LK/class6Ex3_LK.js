/**
 * Created by lkittogsuedu on 10/13/16.
 */

var profile = {
    name: 'Dawn',
    address: '123',
    city: 'Bummer',
    state: 'GA',
    zipcode: '30030',
    avatar: 'burp'
}

function getProfileUpdate() {
    return {name: "Lisa", city: "Oakland"};
};

function updateProfile(update) {
    Object.assign(profile, update, profile);
};

console.log(profile);

updateProfile(getProfileUpdate());

console.log(profile);
