import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import { ImportFailureRow } from 'src/state/api-models/common';

export type ImportFailuresProps = {
  failures: ImportFailureRow[];
};

export const BaseImportFailures: React.FC<ImportFailuresProps> = ({
  failures,
}) => {
  return (
    <>
      <ListGroup>
        {failures &&
          failures.map((failureRow) => (
            <>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Row: {failureRow.row}
                </ListGroupItemHeading>
                {failureRow.failures &&
                  failureRow.failures.map((failureCol) => (
                    <ListGroupItemText key={failureCol.attribute}>
                      Column: {failureCol.attribute}
                      <br />
                      Errors: {JSON.stringify(failureCol.errors)}
                    </ListGroupItemText>
                  ))}
              </ListGroupItem>
            </>
          ))}
      </ListGroup>
    </>
  );
};
