import { Quote } from "../components/Quotes"
import { Auth } from "../components/Auth"

export const Signup = ()=>{
    return (
        <div className="grid lg:grid-cols-2">
            <div>
                <Auth type="signup"/>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    )
}