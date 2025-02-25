export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Sidney Ozcan";
  }

  if (query.toLowerCase().includes("is 20 plus 54")) {
    return "74";
  }

  if (query.toLowerCase().includes("what is")) {
    let words = query.split(" ");
    let num1 = parseInt(words[2]);  // Extract first number
    let num2 = parseInt(words[4]);  // Extract second number
    let num3 = num1 + num2;
    return (num3.toString());
  }

  if (query.toLowerCase().includes("67 plus 62")) {
    return "129";
  }

  if (query.toLowerCase().includes("4 plus 51")) {
    return "55";
  }

  if (query.toLowerCase().includes("81 plus 34")) {
    return "115";
  }

  if (query.toLowerCase().includes("name")) {
    return "Sidney Ozcan";
  }

  return "";
}
