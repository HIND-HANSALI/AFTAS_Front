import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityDocumentType } from 'src/app/models/IdentityDocumentType';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  newMember: Member = {
    id:0,
    membershipNumber: 0,
    name: '',
    familyName: '',
    accessDate: new Date(),
    nationality: '',
    identityDocumentType: IdentityDocumentType.IDENTITY_CARD, // Default value
    identityNumber: ''
  };
  

  identityDocumentTypes = Object.values(IdentityDocumentType);

  constructor(private memberService: MemberService, private router: Router) {}

  createMember(): void {
    this.memberService.saveMember(this.newMember).subscribe(
      (createdMember) => {
        console.log('Member created successfully:', createdMember);
        // Redirect to the member list or view
        this.router.navigate(['/members']);
      },
      (error) => {
        console.error('Error creating member:', error);
      }
    );
  }

}
