export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://d3n8a8pro7vhmx.cloudfront.net/oep/pages/1598/attachments/original/1609173528/The_Electric_Slide_and_Kai.jpg";
   let book2 = "https://d3n8a8pro7vhmx.cloudfront.net/oep/pages/1598/attachments/original/1609173654/I'll_Build_You_A_Bookcase.jpg";
   let book3 = "https://d3n8a8pro7vhmx.cloudfront.net/oep/pages/1598/attachments/original/1609174046/Maryam's_Magic.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Electric Slide and Kai by Kelly Baptist, Illustrated by Darnell Johnson" />
         <img src={book2} alt="I’ll Build You A Bookcase by Jean Fahey, Illustrated by Simone Shin" />
         <img src={book3} alt="Maryam’s Magic: The Story of Mathematician Maryam Mirzakhani by Megan Reid, Illustrated by Aaliya Jaleel" />
      </div>      
   );
}