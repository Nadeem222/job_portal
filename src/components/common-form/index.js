import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


function CommonForm({ action, buttonText, isBtnDisabled, btnType, formControl, formData, setFormData, handleFileChange }) {

    function renderInputByComponentType(getCurrentControl) {
        // console.log(getCurrentControl.placeholder);

        let content = null;
        switch (getCurrentControl.componentType) {
            case "input":
                content = <div className="relative flex items-center mt-8">
                    <Input
                        type="text"
                        disabled={getCurrentControl.disabled}
                        placeholder={getCurrentControl.placeholder}
                        name={getCurrentControl.name}
                        id={getCurrentControl.name}
                        value={formData[getCurrentControl.name]}
                        onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })}
                        className='w-full rounded-md h-["60px"] px-4 border bg-gray-100 shadow-sm transition-all duration-300 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0'
                    />

                </div>

                break;
            case "file":
                content = <Label
                    for={getCurrentControl.name}
                    className="flex bg-gray-100 items-center px-3 py-x mx-auto mt-6 text-center border-2 border-dashed cursor-pointer">
                    <h2>{getCurrentControl.label}</h2>
                    <Input type="file" onChange={handleFileChange} id={getCurrentControl.name} />


                </Label>
                break;
            default:
                content = <div className="relative flex items-center mt-8">
                    <Input
                        type="text"
                        disabled={getCurrentControl.disabled}
                        placeholder={getCurrentControl.placeholder}
                        name={getCurrentControl.name}
                        id={getCurrentControl.name}
                        value={formData[getCurrentControl.name]}
                        onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })}
                        className='w-full rounded-md h-["60px"] px-4 border bg-gray-100 shadow-sm transition-all duration-300 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0'
                    />

                </div>
                break;

        }
        return content
    }
    return (
        <form action={action}>
            {
                formControl.map(control => renderInputByComponentType(control))
            }
            <div>
                <Button
                    type={btnType || "submit"}
                    className='disabled:opacity-60 items-center justify-center flex h-11 mt-6 px-5'
                    disabled={isBtnDisabled} >{buttonText}</Button>
            </div>
        </form>
    )

}


export default CommonForm