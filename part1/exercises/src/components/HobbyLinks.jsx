
export default function HobbyLinks () {
   const hobbyLinks = [ 'https://itch.io/', 
   'https://lospec.com/', 
   'https://aurysystem.github.io/goldbox/'
   ];
   return (
      <div>
         <h3>My Hobbies</h3>
         <ul>
            <li><a href={hobbyLinks[0]}>itch.io</a></li>
            <li><a href={hobbyLinks[1]}>lospec.com</a></li>
            <li><a href={hobbyLinks[2]}>goldbox</a></li>
         </ul>
      </div>
      );
}