function age(dt2, dt1)
{
  // Calculate the difference in milliseconds between the two dates
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from milliseconds to days
  diff /= (60 * 60 * 24);
  // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
  return Math.abs(Math.round(diff / 365.25));
}

// Create two Date objects representing different dates
const dob = new Date("June 14, 2004");
const now = new Date();

document.write("Hi I'm Robin<br><br>I'm " + age(now, dob) + " years old, and I've been streaming and making videos for about as long as I've had internet access");
document.write("<br>I usually have a few art/programming projects going at once (like this website)")
document.write("<br><br>Be sure to check out the various links around the website to:<br>Social Media<br>Game Mods<br>Games<br><sup>and maybe some hidden things</sup>");