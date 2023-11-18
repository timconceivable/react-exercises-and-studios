import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
   <div className={classes.container}>
      <h3 className = {classes.choresHeading}>Today's Chores</h3>
      <ol>
         <li className = {classes.choresText}>wash dishes</li>
         <li className = {classes.choresText}>laundry</li>
         <li className = {classes.choresText}>take out garbage</li>
      </ol>
   </div>
   );
}