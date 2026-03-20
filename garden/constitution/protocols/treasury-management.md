---
title: "Treasury Management Protocol"
tags:
  - constitution
  - protocol
aliases:
  - Treasury Protocol
  - Financial Management
---

This protocol governs how the Network Nations Alliance treasury is managed -- ensuring responsible stewardship of shared financial resources.

## Instantiation

**Trigger Type:** Action-based

**Trigger Condition:**
- Funds are received by the Alliance
- An expenditure is proposed
- Financial reporting period occurs

## Authority & Oversight

| Role | Authority | Accountability |
|------|-----------|----------------|
| [[constitution/structure/groups/steward-council|Steward Council]] | Manages treasury, approves expenditures | Alliance Assembly |
| [[constitution/structure/roles/steward|Steward]]s | Signatories on multi-sig wallet | Steward Council |
| [[constitution/structure/groups/alliance-assembly|Alliance Assembly]] | Approves annual budget, major expenditures | The Constitution |

## Treasury Structure

The Alliance treasury is held in a multi-signature wallet requiring multiple Steward approvals for transactions.

**Wallet Configuration:**
- All Stewards are signatories
- Threshold varies by transaction size (see below)

## Transaction Approval Thresholds

| Amount | Required Signers | Process |
|--------|-----------------|---------|
| Under $500 | 2 of N Stewards | Direct approval |
| $500 - $2,000 | 3 of N Stewards | Steward Council notification |
| Over $2,000 | Majority of Stewards | Steward Council decision |
| Over $10,000 | Majority + Alliance Assembly | Assembly notification required |

## Rights & Responsibilities

### Steward Council

**Rights:**
- Receive and hold funds on behalf of Alliance
- Approve expenditures within guidelines
- Propose budget to Alliance Assembly

**Responsibilities:**
- Maintain accurate financial records
- Provide quarterly financial reports to Members
- Ensure funds are used for Alliance purposes
- Conduct annual financial review

### Individual Stewards

**Rights:**
- Propose expenditures
- Sign transactions as signatory

**Responsibilities:**
- Review transactions before signing
- Verify expenditure is appropriate
- Report any concerns to Council

### Alliance Assembly

**Rights:**
- Receive financial reports
- Approve annual budget
- Direct major expenditure decisions

**Responsibilities:**
- Engage with financial matters in good faith
- Provide input on resource priorities

## Expenditure Categories

| Category | Description | Approval Level |
|----------|-------------|----------------|
| **Operations** | Hosting, tools, subscriptions | Steward Council |
| **Activities** | Support for Alliance activities | Steward Council |
| **Events** | Gatherings, travel support | Steward Council |
| **Grants** | Funding to projects/initiatives | Alliance Assembly |
| **Compensation** | Payment for work | Steward Council (within budget) |

## Process Sequence (Expenditures)

| Step | Action | Actor | Duration | Output |
|------|--------|-------|----------|--------|
| 1 | Propose expenditure | Steward | -- | Proposal documented |
| 2 | Review | Steward Council | 48 hours | Decision made |
| 3 | Sign transaction | Required Stewards | 48 hours | Transaction executed |
| 4 | Record | Designated Steward | Within 24 hours | Record updated |

## Financial Reporting

**Quarterly Reports:** Steward Council shares treasury balance and transaction summary with Members
**Annual Report:** Comprehensive financial report presented at Annual Gathering
**On Request:** Members may request financial information at any time

## Receiving Funds

- All incoming funds logged with source and purpose
- Restricted funds (grants, donations with conditions) tracked separately
- Acknowledgment sent to donors when appropriate

## Completion & Outputs

**Protocol completes when:**
- Transaction is executed and recorded
- Reporting period is complete

**Outputs:**
- Transaction records
- Financial reports
- Audit trail

## Exceptions & Edge Cases

- **Emergency expenditure:** Any Steward may authorize up to $500 for genuine emergencies; must be reported within 24 hours
- **Signatory unavailability:** If required signers unavailable, Council may temporarily adjust threshold with documentation
- **Disputed transactions:** Any Steward may pause a transaction for 48 hours pending Council discussion

## Related Protocols

- [[constitution/protocols/steward-council|Steward Council Protocol]] -- Where expenditure decisions occur
- [[constitution/structure/assets/treasury|Multi-Sig Treasury]] -- Asset documentation
