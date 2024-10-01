def konwertuj_liczbe(liczba, system):
    if system == 2:
        return bin(liczba)[2:] 
    elif system == 8:
        return oct(liczba)[2:] 
    elif system == 16:
        return hex(liczba)[2:]  
    else:
        return f"Nieobsługiwany system liczbowy: {system}"

liczba = int(input("Podaj liczbę dziesiętną: "))
system = int(input("Podaj system liczbowy (np. 2, 8, 16): "))

wynik = konwertuj_liczbe(liczba, system)
print(f"Liczba {liczba} w systemie {system} to: {wynik}")
