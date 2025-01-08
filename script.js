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
      // Die Großbuchstaben bleiben erhalten
    } else if (ascii >= 97 && ascii <= 122) {
      // Die Kleinbuchstaben bleiben erhalten
      result.push(currentElement)
    } else if (ascii === 32) {
      // Die Leerzeichen bleiben erhalten
      result.push(currentElement)
    }
  }
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // Wenn das Element ein Leerzeichen ist und das nächste Element auch ein Leerzeichen ist, wird das Leerzeichen ignoriert
    } else {
      result2.push(currentElement)
      // Die anderen Zeichen bleiben
    }
  }

  let count = 0
  // Die Anzahl der Leerzeichen berechnen
  for (let i = 0; i < result.length; i++) {
    const currentElement = result2[i]

    if (currentElement === " ") {
      // Wenn das Element ein Leerzeichen ist
      count++
      // Die Anzahl der Leerzeichen wird um eins erhöht
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
    // Alle Zeichen der Eingabe durchgehen
    const currentElement = input[i]

    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    // So wird geschaut ob das Zeichen ein korrekter Hexcode ist
    return hexPattern.test(input)
    // Wenn das Zeichen ein korrekter Hexcode ist, wird true zurueckgegeben
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Alle Zeichen der Eingabe durchgehen
    const currentElement = input[i] // Das aktuelle Zeichen auswählen

    const asciiCode = input.charCodeAt(i)
    // Den Ascii Code des aktuellen Zeichens berechnen
    result.push(asciiCode) // Den Ascii Code in das Ergebnis einfügen
  }
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Alle Zeichen der Eingabe durchgehen
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
  // So wird geschaut ob das Zeichen "e" dabei ist

  for (let i = 0; i < input.length; i++) {
    // Alle Zeichen der Eingabe durchgehen
    const currentElement = input[i]

    if (currentElement === "e") {
      // Wenn das Element das Zeichen "e" ist, wird die letzte Position zurückgegeben
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
  // So wird geschaut ob das Zeichen " " dabei ist

  for (let i = 0; i < position; i++) {
    // Alle Zeichen der Eingabe durchgehen
    const currentElement = input[i]
    result.push(currentElement)
    // Das aktuelle Zeichen in das Ergebnis einfügen
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  const position = input.indexOf("$")
  // So wird geschaut ob das Zeichen "$" dabei ist

  for (let i = 0; i < position; i++) {
    // Alle Zeichen der Eingabe durchgehen
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
      // Wenn ein Leerzeichen kommt, wird das Wort zur Liste hinzugefügt
      totalList.push(currentList.join(""))
      currentList.length = 0 // Die Liste wird zurükgesetzt fürs nächste Wort
    } else {
      // Wenn kein Leerzeichen kommt, wird das Zeichen zur Liste hinzugefügt
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
  // Die Funktion aus Aufgabe 17 wird aufgerufen
  const result = []

  result.push("Sie heissen ")
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")
  // Die Zeichen werden gepusht

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    // Die Zeichen der Eingabe durchgehen
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
    // Alle Zeichen werden zweimal gepusht, so verdoppeln sie sich
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length - 1; i++) {
    // Zeichen durchgehen
    const currentElement = input[i]
    const nextElement = input[i + 1]
    if (currentElement === "." && nextElement === " ") {
      // Wenn das aktuelle Zeichen ein Punkt ist und das nächste Zeichen ein Leerzeichen ist, wird false zurückgegeben
    } else {
      return true
      // Wenn das aktuelle Zeichen kein Punkt ist oder das nächste Zeichen kein Leerzeichen ist, wird true zurückgegeben
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    // Durch das Minus wird die Eingabe umgekehrt geschrieben wiedergegeben
    const currentElement = input[i]
    result.push(currentElement)
    // Die Zeichen werden umgekehrt gepusht
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      // Wenn das aktuelle Zeichen das Zeichen "k" ist
      result.push(input.slice(i))
      // wird die restliche Eingabe in das Ergebnis gepusht
      break
      // Die Schleife wird beendet
    } else {
      // Wenn das aktuelle Zeichen das Zeichen "k" nicht ist
      result.push("_")
      // wird ein Unterstrich gepusht
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(input) {
  const args = input
  const result = []
  const firstChar = input[0] // Erstes Zeichen der Eingabe

  for (let i = 0; i < input.length; i++) {
    // Alle Zeichen der Eingabe durchgehen
    result += input[i]
  }

  result += firstChar // Erstes Zeichen am Ende hinzufügen

  return result
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length > 1) {
    // Wenn die Eingabe mehr als ein Zeichen hat
    const firstChar = input[0]
    const lastChar = input[input.length - 1]
    // Die ersten und letzten Zeichen der Eingabe werden zuerst gespeichert
    input = lastChar + input.slice(1, -1) + firstChar
    // Die Eingabe wird umgedreht
    result.push(input)
    // Die Eingabe wird gepusht
  } else {
    result.push(input)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []

  const inputLength = input.length
  const middleIndex = Math.floor(inputLength / 2)

  if (inputLength % 2 === 0) {
    // Wenn die Anzahl der Zeichen gerade ist
    result.push(input.slice(0, middleIndex - 1))
    result.push(input.slice(middleIndex + 1))
    // Die beiden mittleren Zeichen werden gelöscht
  } else {
    // Wenn die Anzahl der Zeichen ungerade ist
    result.push(input.slice(0, middleIndex))
    result.push(input.slice(middleIndex + 1))
    // Das mittlere Zeichen wird gelöscht
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
}

export function aufgabe27(input) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (!isNaN(input) && typeof input === "number") {
      // Wenn die Eingabe eine Zahl ist
      result.push("Es ist eine Zahl.")
      // Wird der Satz "Es ist eine Zahl." gepusht
    } else {
      // Wenn die Eingabe keine Zahl ist
      result.push("Es ist keine Zahl.")
      // Wird der Satz "Es ist keine Zahl." gepusht
    }
  }

  return result.join("")
}

export function EigeneAufgabe01(input) {
  const inputLength = input.length
  const isInputLengthEven = inputLength % 2 === 0

  const result = []
  if (isInputLengthEven) {
    result.push("Die Anzahl der Zeichen ist gerade.")
    // Wenn die Anzahl der Zeichen gerade ist wird das wiedergegeben
  } else {
    result.push("Die Anzahl der Zeichen ist ungerade.")
    // Wenn die Anzahl der Zeichen ungerade ist wird das wiedergegeben
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=EigeneAufgabe01]", EigeneAufgabe01)

export function EigeneAufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "ja") {
      // Wenn das Element das Wort "ja" ist
      result.push("+")
      // Wird + gepusht
    } else {
      result.push(currentElement)
    }
    if (currentElement === "nein") {
      // Wenn das Element das Wort "nein" ist
      result.push("-")
      // Wird - gepusht
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=EigeneAufgabe02]", EigeneAufgabe02)

export function EigeneAufgabe03(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement === "a" ||
      currentElement === "e" ||
      currentElement === "i" ||
      currentElement === "o" ||
      currentElement === "u"
      // So wird geschaut ob das Element ein Vokal ist
    ) {
      result.push("1")
      // Wenn das Element ein Vokal ist, wird 1 gepusht
    } else {
      result.push("0")
      // Wenn das Element kein Vokal ist, wird 0 gepusht
    }
  }

  return result.join("")
}
