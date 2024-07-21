import { useState } from "react"

export default function Header() {
    return (
        <header>
            <div className="title">
                <h2>Memory Cards!</h2>
                <span>Click each card, but don't click the same one twice!</span>
            </div>
            <div className="score">
                <span>Score: </span>
            </div>
        </header>
    )
}