function slugify(title) {
  const lowerCase = title.toLowerCase();
  const lowerSlug = lowerCase.split(" ").join("-");
  return lowerSlug;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));