type FooterProps = {
    author: string;
    month: string;
    year: string;
  };
  
  const Footer = ({ author, month, year }: FooterProps) => {
    return (
      <footer>
      
          Done with ❤️ by {author} - {month}/{year}
       
      </footer>
    );
  };
  
  export default Footer;
  