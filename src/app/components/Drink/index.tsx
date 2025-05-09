import Image from "next/image";


type DrinkProps = {
    drinkName: string,
    description: string,
    image: string
    onVote: () => void;
}

const Drink= ({drinkName, description, image, onVote}: DrinkProps)=>{
    return(
        
        <div className="drink">
        <div>
        <h2>{drinkName}</h2>
        <p>{description}</p>
          <Image
          src={image}
          alt={drinkName}
          className="drinkImage"
          width={400}
          height={300}
          priority
        />

</div>
        <button onClick={onVote}>Vote for{drinkName}</button>

</div>
        
    )
}

export default Drink