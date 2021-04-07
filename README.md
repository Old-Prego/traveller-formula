# To-do's

## Building the string
- Append IFERROR() to left for every loop
- Lookup from Column I:I for parts


## Getting Criteria
- Get number of rows
- Get Sheet for looking up and column range 
- Get starting row number
- Get Error out default result

## Single Line example
- =IFERROR(VLOOKUP({Lookup Sheet}!${Lookup Column}{RowNum},I:I,{Return Column},0),"NONE")

## Multi Line Example

=IFERROR(
    IFERROR(
        IFERROR(
            IFERROR(
                IFERROR(
                    IFERROR(
                        IFERROR(
                            IFERROR(
                                IFERROR(
                                    IFERROR(
                                        IFERROR(
                                            IFERROR(
                                                IFERROR(
                                                    IFERROR(
                                                        IFERROR(
                                                            VLOOKUP(Electronics!$E$3,I:I,1,0),
                                                        VLOOKUP(Electronics!$E$4,I:I,1,0)),
                                                    VLOOKUP(Electronics!$E$5,I:I,1,0)),
                                                VLOOKUP(Electronics!$E$6,I:I,1,0)),
                                            VLOOKUP(Electronics!$E$7,I:I,1,0)),
                                        VLOOKUP(Electronics!$E$8,I:I,1,0)),
                                    VLOOKUP(Electronics!$E$9,I:I,1,0)),
                                VLOOKUP(Electronics!$E$10,I:I,1,0)),
                            VLOOKUP(Electronics!$E$11,I:I,1,0)),
                        VLOOKUP(Electronics!$E$12,I:I,1,0)),
                    VLOOKUP(Electronics!$E$13,I:I,1,0)),
                VLOOKUP(Electronics!$E$14,I:I,1,0)),
            VLOOKUP(Electronics!$E$15,I:I,1,0)),
        VLOOKUP(Electronics!$E$16,I:I,1,0)),
    VLOOKUP(Electronics!$E$17,I:I,1,0)),
"NONE")