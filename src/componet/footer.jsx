import { useContext } from "react"
import { StyleContext } from "../usehook/createcontext"
import './Footer.css'
const Footer = () => {
    const { isLight} = useContext(StyleContext)
    return (
        <div className={`footerdiv ${isLight ? "footerdivlight" : "footerdivdark"}`}>
            <div className={`divmyname ${isLight ? "divmynamelight": "divmynamedark"}`}>
                <div >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </div>
                <div>
                    <p>
                        2026 Adnan Damizadeh
                    </p>
                    
                </div>
            </div>
            <div className="divsvg">
                <div>
                    <a className={isLight ? "svglight" : "svgdark"} href="https://t.me/ADNAN_DMZ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21.5 2L2 11l6 2.5L18 6l-8 9.5v5.5l3.5-3.5 4.5 3.5 3.5-18.5z" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a className={isLight ? "svglight" : "svgdark"} href="mailto:adnan55dmz@gmail.com">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="3" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a className={isLight ? "svglight" : "svgdark"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer