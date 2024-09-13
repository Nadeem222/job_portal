"use client"


const { Tabs, TabsList, TabsTrigger } = require("@/components/ui/tabs");

const OnBoard = () => {
    return (
        <div className="bg-white">
            <Tabs>
                <div className="w-full">
                    <div className="flex items-baseline justify-between border-b pb-6 pt-4  ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">welcome to On Boarding</h1>
                        <TabsList>
                            <TabsTrigger>Candidiate</TabsTrigger>
                            <TabsTrigger>Recruiter</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

export default OnBoard