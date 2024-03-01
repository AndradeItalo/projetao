import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Configuracao = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
            <Path
                fill="#8FBFFA"
                d="M9.279 3.606c-.648 1.406-.012 3.357 1.905 3.69.716.124 1.286.67 1.443 1.38l.026.121c.208.957.823 1.58 1.557 1.869V12.6l.966 1.197a1.286 1.286 0 0 1 .103 1.453l-.515.9a1.285 1.285 0 0 1-1.285.632l-1.519-.232-1.879 1.08-.552 1.429a1.286 1.286 0 0 1-1.198.822h-1.08a1.286 1.286 0 0 1-1.197-.822l-.553-1.429-1.878-1.08-1.519.232a1.285 1.285 0 0 1-1.285-.63l-.515-.9a1.286 1.286 0 0 1 .103-1.455l.939-1.197V10.44L.38 9.243A1.286 1.286 0 0 1 .28 7.789l.514-.9a1.286 1.286 0 0 1 1.286-.632l1.518.232 1.904-1.08.553-1.429a1.286 1.286 0 0 1 1.197-.823h1.055a1.286 1.286 0 0 1 .971.449h.002Zm1.187 7.914a2.687 2.687 0 0 1-3.731 2.54 2.688 2.688 0 1 1 3.73-2.54Z"
            />
            <Path
                fill="#2859C5"
                d="M16.309.987C16.04-.19 14.359-.184 14.1.997l-.01.046-.019.089a3.271 3.271 0 0 1-2.632 2.511c-1.23.214-1.23 1.98 0 2.194a3.272 3.272 0 0 1 2.635 2.52l.026.122c.259 1.181 1.94 1.188 2.209.01l.032-.142a3.293 3.293 0 0 1 2.646-2.511c1.232-.214 1.232-1.983 0-2.197a3.293 3.293 0 0 1-2.666-2.596L16.31.99V.987Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Configuracao
