# Index Moderation Protocol

This protocol governs how the Network Nations Index is moderated — maintaining quality and coherence while supporting open contribution through a transparent pull request workflow.

## Instantiation

**Trigger Type:** Action-based

**Trigger Condition:**
- A contributor submits a pull request to the Index repository
- A concern is raised about an existing entry
- Periodic review is conducted

## Authority & Oversight

| Role | Authority | Accountability |
|------|-----------|----------------|
| [[Steward Council]] | Final moderation decisions, merge authority | Alliance Assembly |
| Reviewing Steward | Reviews and approves/requests changes on PRs | Steward Council |
| Contributor | Submits PRs with accurate information | Reviewing Steward |

## Moderation Principles

- **Open by default:** The Index welcomes contributions; PRs are merged unless clearly misaligned
- **Light touch:** Review focuses on alignment and accuracy, not editorial judgment
- **Transparency:** All moderation happens in public PR comments
- **Appeal available:** Rejected PRs may appeal to full Steward Council

## Entry Criteria

Entries should demonstrate alignment with the [[Network Nation Definition]]:

**Must have:**
- Distributed community (not purely local)
- Shared identity or coherence
- Some form of coordination or governance
- Genuine activity (not vaporware)

**Red flags (may warrant rejection):**
- Purely commercial venture with no community aspect
- No evidence of actual activity or membership
- Misrepresentation or false claims
- Content that conflicts with Alliance values

## Rights & Responsibilities

### Contributor

**Rights:**
- Fork the Index repository
- Submit pull requests for new entries or updates
- Receive review feedback within 14 days
- Receive explanation if PR is not merged
- Appeal rejection to Steward Council

**Responsibilities:**
- Provide accurate information
- Follow contribution guidelines and templates
- Respond to review comments and requested changes
- Update entries when circumstances change

### Reviewing Steward

**Rights:**
- Review and comment on pull requests
- Request changes before merge
- Approve and merge PRs that meet criteria
- Close PRs that clearly don't meet criteria
- Flag PRs for Council review

**Responsibilities:**
- Review PRs within 14 days
- Apply criteria consistently
- Provide clear, constructive feedback
- Escalate uncertain cases to Council

## Process Sequence

| Step | Action | Actor | Duration | Output |
|------|--------|-------|----------|--------|
| 1 | Fork repository | Contributor | — | Personal fork created |
| 2 | Create/edit entry | Contributor | — | Changes in branch |
| 3 | Submit pull request | Contributor | — | PR open for review |
| 4 | Review PR | Reviewing Steward | Within 14 days | Approved, changes requested, or flagged |
| 5 | Address feedback (if needed) | Contributor | 14 days | PR updated |
| 6 | Final decision | Steward (or Council) | Within 7 days | PR merged or closed |
| 7 | Appeal (if requested) | Steward Council | Within 14 days | Appeal decided |

### Step 1-3: Submission

Contributors:
1. Fork the Network Nations Index repository
2. Create a new branch for their changes
3. Add or edit entry following the provided template
4. Submit a pull request with clear description

PR description should include:
- Type of change (new entry, update, correction)
- Brief summary of the Network Nation or resource
- Any relevant context

### Step 4: Review

Reviewing Steward examines the PR:
- **Approve:** Entry meets criteria; PR merged
- **Request Changes:** Minor issues to address; contributor updates PR
- **Flagged:** Uncertain case referred to Steward Council
- **Close:** Entry clearly doesn't meet criteria; explanation provided in comments

### Step 5: Iteration

If changes requested:
- Contributor addresses feedback in PR
- Steward re-reviews updated PR
- Process continues until resolved

### Step 6: Resolution

- **Merged:** Entry live in Index
- **Closed:** PR not merged; contributor may appeal or submit revised PR later

## Periodic Review

Steward Council conducts annual review of Index entries to:
- Identify inactive or defunct projects
- Flag outdated information for update
- Ensure continued alignment

Entries may be marked inactive or archived via PR if projects become defunct.

## Completion & Outputs

**Protocol completes when:**
- PR is merged
- PR is closed (with appeal period passed)
- Appeal is decided

**Outputs:**
- Index entry (if merged)
- Public PR record with review history
- Communication via PR comments

## Exceptions & Edge Cases

- **Borderline cases:** When alignment is unclear, err toward merging with notation
- **Prominent rejections:** If closing PR for well-known project, Steward Council reviews collectively
- **Self-removal:** Entry maintainers may submit PR to remove their own entries at any time
- **Urgent corrections:** Stewards may make direct commits for critical fixes, documented in commit history

## Related Protocols

- [[Network Nation Definition]] — Criteria basis
- [[Steward Council Protocol]] — Appeal handling
