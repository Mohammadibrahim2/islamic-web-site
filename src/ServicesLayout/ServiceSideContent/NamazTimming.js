import React from "react";

const NamazTimming = () => {

    return (
    <div>
        <h1 className="text-left text-black text-3xl font-semibold my-4">Namaz sheudels</h1>
        <div>
            <div className="overflow-x-auto">
                <table className="text-black bg-orange-400 w-full ">

                    <thead className="text-center px-2" >
                        <tr className="bg-orange-600 py-2 border-white border">
                        <th></th>
                        
                            <th   >
                               Maijdee,Noakhali
                                Friday, 9th December, 2022
                            </th>
                          
                            <th></th>
                        </tr>
                        <tr className=" border-white border">
                            <th>Begins</th>
                           
                               <th>Ekamah</th>
                                <tr>
                                   
                                    <th>Jummah</th>
                                </tr>
                            
                           
                        </tr>
                    </thead>
                    <tbody>

                        <tr className=" border-white border">
                           
                            
                            <td className="border">Fajr </td>
                            <td className="border">6:09 AM</td>
                            <td className="border">7:00 AM</td>
                        </tr>
                        <tr className=" border-white border">
                           
                            
                            <td className="border">Zahor </td>
                            <td className="border">6:09 AM</td>
                            <td className="border">7:00 AM</td>
                        </tr>

                        <tr className=" border-white border">
                           
                            
                           <td className="border">Asor </td>
                           <td className="border">6:09 AM</td>
                           <td className="border">7:00 AM</td>
                       </tr>

                       <tr className=" border-white border">
                           
                            
                           <td className="border">Magrib </td>
                           <td className="border">6:09 AM</td>
                           <td className="border">7:00 AM</td>
                       </tr>

                       <tr className=" border-white border">
                           
                            
                           <td className="border">Esha </td>
                           <td className="border">6:09 AM</td>
                           <td className="border">7:00 AM</td>
                       </tr>


                        

                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>)

}
export default NamazTimming