import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCase = currentElement.toUpperCase()
    // Die Großbuchstaben bleiben erhalten die kleinen werden durch Grossbuchstaben ersetzt
    result.push(upperCase)
    // Der Befehl wird ausgeführt
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
      // Wenn das Element das Wort "e" ist, wird der Zaehler um eins erhoeht
    } else if (currentElement === "E") {
      count = count + 1
      // Auch hier wird der Zaehler um eins erhoeht
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
    } else {
      result2.push(currentElement)
    }
  }

  let count = 0
  for (let i = 0; i < result.length; i++) {
    const currentElement = result2[i]

    if (currentElement === " ") {
      count++
    }
  }

  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "A" && currentElement <= "Z") {
      // Es schaut ob ein Element ein Grossbuchstabe ist
      return true
      // Wenn das Element ein Grossbuchstabe ist, wird falsch angezeigt
    } else if (currentElement >= "a" && currentElement <= "z") {
      // Es schaut ob ein Element ein Kleinbuchstabe ist
      return false
      // Wenn das Element ein Kleinbuchstabe ist, wird richtig angezeigt
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let count = 0
  // fängt bei 0 an
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      (currentElement >= "!" && currentElement <= "/") ||
      (currentElement >= ":" && currentElement <= "@") ||
      (currentElement >= "[" && currentElement <= "`") ||
      (currentElement >= "{" && currentElement <= "~")
      // So wird geschaut ob das Zeichen ein Sonderzeichen ist
    ) {
      count = count + 1
      // Wenn das Zeichen ein Sonderzeichen ist, wird der Zaehler um eins erhoeht
    }
  }

  return count >= 1
  // Wenn der Zaehler 1 oder mehr ist, wird true zurueckgegeben, wenn nicht dann false
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "und") {
      // So wird geschaut ob das Wort "und" dabei ist
      return true
      // Wenn das Wort "und" dabei ist, wird true zurueckgegeben
    } else {
      return false
      // Wenn das Wort "und" nicht dabei ist, wird false zurueckgegeben
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // Wenn das Element das Element "e" ist, wird der Befehl ausgefuehrt
      result.push("3")
      // Das Element "e" wird durch 3 ersetzt
    } else {
      // Wenn das Element das Element "e" nicht ist, wird der Befehl ausgefuehrt
      result.push(currentElement)
      // Das Element wird nicht ersetzt
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (input.length < 6) {
      // So wird geschaut ob das Element weniger als 6 Buchstaben lang ist
      return false
      // Wenn das Element weniger als 6 Buchstaben lang ist, wird false zurückgegeben
    } else {
      return true
      // Wenn das Element mehr als 6 Buchstaben lang ist, wird true zurückgegeben
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    return hexPattern.test(input)
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const asciiCode = input.charCodeAt(i)
    result.push(asciiCode)
  }
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
      // Wenn das Element das Zeichen "e" ist, wird die aktuelle Position zurückgegeben
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []
  const position = text.indexOf("e")

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      return text.lastIndexOf("e")
    }
  }
}

export function aufgabe14(args) {
  const input = args
  const result = []

  return result.join("")
}

export function aufgabe15(args) {
  const input = args
  const result = []
  const position = input.indexOf(" ")

  for (let i = 0; i < position; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  const position = input.indexOf("$")

  for (let i = 0; i < position; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe16"]', aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  const result = []

  result.push("Sie heissen ")
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length - 1; i++) {
    const currentElement = input[i]
    const nextElement = input[i + 1]
    if (currentElement === "." && nextElement === " ") {
    } else {
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function EigeneAufgabe01(input) {
  const inputLength = input.length
  const isInputLengthEven = inputLength % 2 === 0

  const result = []
  if (isInputLengthEven) {
    result.push("Die Anzahl der Zeichen ist gerade.")
  } else {
    result.push("Die Anzahl der Zeichen ist ungerade.")
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=EigeneAufgabe01]", EigeneAufgabe01)

export function EigeneAufgabe02(input) {}
