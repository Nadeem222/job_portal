"use client"

import { useState } from "react";
import CommonForm from "../common-form";
import { recruiterOnboardFormControls, initialRecruiterFormData, candidateOnboardFormControls, initialCandidateFormData } from "../utils";
import { useUser } from "@clerk/nextjs";



const { Tabs, TabsList, TabsTrigger, TabsContent } = require("@/components/ui/tabs");

const OnBoard = () => {

    const [currentTab, setCurrentTab] = useState("candidate")
    const [recruiterFormData, setRecruiterFormData] = useState(initialRecruiterFormData)

    const [candidateFormData, setCandidateFormData] = useState(initialCandidateFormData)

    const currentAuthUser = useUser()
    const {user} = currentAuthUser
    // console.log(currentAuthUser);


    function handleTabChange(value) {
        setCurrentTab(value)
    }
    // console.log(recruiterFormData);


    const handleRecruiterFormValid = () => {
        return (recruiterFormData && recruiterFormData.name.trim() !== "" && recruiterFormData.companyName.trim() !== "" && recruiterFormData.companyRole.trim() !== "")
    }
    const createProfileAction = async () =>{
        const data = {
            recruiterInfo : recruiterFormData,
            role : "recruiter",
            isPremiumUser : false,
            userId : user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
        }
        await createProfileAction(date , "/onboard")
    }
    return (
        <div className="bg-white">
            <Tabs value={currentTab} onValueChange={handleTabChange}>
                <div className="w-full">
                    <div className="flex items-baseline justify-between border-b pb-6 pt-4  ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">welcome to On Boarding</h1>
                        <TabsList>
                            <TabsTrigger value="candidate">Candidate</TabsTrigger>
                            <TabsTrigger value="recruiter">
                                recruiter
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <TabsContent value="candidate">
                    <CommonForm
                        formControl={candidateOnboardFormControls}
                        setFormData={setCandidateFormData}
                        formData={candidateFormData}
                        buttonText={"Onboard as candidate"}
                    />
                </TabsContent>
                <TabsContent value="recruiter">
                    <CommonForm
                        formControl={recruiterOnboardFormControls}
                        buttonText={"Onboard as recruiter"}
                        formData={recruiterFormData}
                        setFormData={setRecruiterFormData}
                        isBtnDisabled={!handleRecruiterFormValid()}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default OnBoard