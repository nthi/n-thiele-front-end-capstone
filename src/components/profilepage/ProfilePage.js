import { LoggedPlans } from "./LoggedPlans"
import { SavedPlans } from "./SavedPlans"
import { UserProfileCard } from "./UserProfileCard"

export const ProfilePage = () => {
    return (<>
        <div className="loggedColumn">
        <LoggedPlans />
        </div>

        <div className="savedColumn">
        {/* <SavedPlans /> */}
        </div>

        <div className="profileColumn">
        {/* <UserProfileCard /> */}
        </div>
    </>
    )
}