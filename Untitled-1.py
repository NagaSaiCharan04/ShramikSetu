"""class name:
    def add(self,a,b,c=0,d=0):
        if c!=0 and d!=0:
            return (a+b)*(c+d)
        elif c!=0: return a+b+c
        else: return a+b
print(name().add(a=19,b=3))  """

class A:
    def __init__(self,a):
        self.a=a   def __add__(self,other):
        return self.a + other.a
arjun = A(10)
seenu = A(50)
print(arjun + seenu)