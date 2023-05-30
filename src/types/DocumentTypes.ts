import DocumentEnum from "../enums/DocumentEnum";
import { ChoiceTypes } from "../types/ChoiceTypes";


export interface DocumentTypes extends ChoiceTypes
{
        fileName : string,
        fileUrl : string,
        docStatus?  : DocumentEnum

}