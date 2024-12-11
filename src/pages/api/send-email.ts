import type { APIRoute } from 'astro';
// @ts-ignore
import nodemailer from 'nodemailer';
import { emailConfig } from '../../config/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    const transporter = nodemailer.createTransport(emailConfig.smtp);

    // Send email to company
    await transporter.sendMail({
      from: data.name + ' <' + data.email + '>',
      to: data.to,
      subject: '[Contact Form] ' + data.subject,
      text: 
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Company: ' + data.company + '\n\n' +
        'Message:\n' + data.message + '\n\n' +
        '---\n' +
        'Sent via ' + emailConfig.company.name + ' Contact Form',
      html: 
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
          '<div style="text-align: center; margin-bottom: 20px;">' +
            '<img src="' + emailConfig.company.logo + '" alt="' + emailConfig.company.name + '" style="max-width: 200px;">' +
          '</div>' +
          
          '<h2>New Contact Form Submission</h2>' +
          '<p><strong>Name:</strong> ' + data.name + '</p>' +
          '<p><strong>Email:</strong> ' + data.email + '</p>' +
          '<p><strong>Company:</strong> ' + data.company + '</p>' +
          '<p><strong>Message:</strong></p>' +
          '<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">' + data.message + '</p>' +
          
          '<hr style="margin: 20px 0;">' +
          
          '<div style="color: #666; font-size: 12px;">' +
            '<p>This email was sent via ' + emailConfig.company.name + ' Contact Form</p>' +
            '<p>' +
              emailConfig.company.name + '<br>' +
              emailConfig.company.address + '<br>' +
              emailConfig.company.phone + '<br>' +
              '<a href="' + emailConfig.company.website + '">' + emailConfig.company.website + '</a>' +
            '</p>' +
          '</div>' +
        '</div>'
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: emailConfig.company.name + ' <' + emailConfig.company.email + '>',
      to: data.email,
      subject: 'Thank you for contacting ' + data.company,
      text:
        'Dear ' + data.name + ',\n\n' +
        'Thank you for contacting ' + data.company + '. We have received your message and will forward it to the appropriate team.\n\n' +
        'Your message:\n' + data.message + '\n\n' +
        'Best regards,\n' + emailConfig.company.name + ' Team',
      html:
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
          '<div style="text-align: center; margin-bottom: 20px;">' +
            '<img src="' + emailConfig.company.logo + '" alt="' + emailConfig.company.name + '" style="max-width: 200px;">' +
          '</div>' +
          
          '<h2>Thank you for your message</h2>' +
          '<p>Dear ' + data.name + ',</p>' +
          '<p>Thank you for contacting ' + data.company + '. We have received your message and will forward it to the appropriate team.</p>' +
          
          '<div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">' +
            '<p><strong>Your message:</strong></p>' +
            '<p>' + data.message + '</p>' +
          '</div>' +
          
          '<p>Best regards,<br>' + emailConfig.company.name + ' Team</p>' +
          
          '<hr style="margin: 20px 0;">' +
          
          '<div style="color: #666; font-size: 12px;">' +
            '<p>' +
              emailConfig.company.name + '<br>' +
              emailConfig.company.address + '<br>' +
              emailConfig.company.phone + '<br>' +
              '<a href="' + emailConfig.company.website + '">' + emailConfig.company.website + '</a>' +
            '</p>' +
          '</div>' +
        '</div>'
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}