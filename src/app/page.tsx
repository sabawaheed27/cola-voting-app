"use client";

import { useState, useEffect } from "react"
import styles from "./page.module.css";
import Result from "./components/Result";
import Drink from "./components/Drink";
import Cocacola from "../../public/cocacola.webp"
import CocacolaZero from "../../public/cokezero.jpg"




export default function Home() {
  const [cocaCola, setCocaCola] = useState<number>(0)
  const [cocaColaZero, setCocaColaZero] = useState<number>(0)
  const [winner, setWinner] = useState<string | null>(null)

  const handleClick = (drink: string) => {
    if (drink === "cocaCola") {
      setCocaCola(cocaCola + 1)
    } else
      setCocaColaZero(cocaColaZero + 1)
  }

  useEffect(() => {
    if (cocaCola > cocaColaZero) {
      setWinner("CocaCola")
    } else if (cocaColaZero > cocaCola) {
      setWinner("CocoColaZero")
    } else {
      setWinner(null)
    }
  }, [cocaCola, cocaColaZero])

  return (
    <div className={styles.main}>
      {(cocaCola !== 0 || cocaColaZero !== 0) &&

        <Result
          winner={winner}
          cocaCola={cocaCola}
          cocaColaZero={cocaColaZero} />
      }

      <div className="drinkContainer">
        <Drink
          drinkName="CocaCola"
          description="Coca-Cola is a carbonated, sweetened soft drink and is the world's best-selling soda."
          image="/cocacola.webp"
          onVote={() => handleClick("cocaCola")}
        />

        <Drink
          drinkName="CocaColaZero"
          description="It is a carbonated beverage with high quality, great taste, with zero calories, no sugar and low in sodium."
          image="/cokezero.jpg"
          onVote={() => handleClick("cocaColaZero")}
        />


      </div>
      <p>

      </p>
    </div>
  );
}
