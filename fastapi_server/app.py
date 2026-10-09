from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword: str
    stuage:int
    stumark:float

app = FastAPI()

@app.get("/getStudents")
def getStudents():
    return "get students method called"

@app.post("/addStudent")
def addStudent(stu:Student):
    return {"student_details": stu}

@app.put("/updateStudent")
def updateStudent():
    return "update student method called"

@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"

@app.get("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid": id}
# localhost:8000/filterdept?dept ="CSE" & marks = 65
@app.get("/filterdept")
def filterdept(dept:str, marks:int):
    return {"dept": dept, "marks": marks}
